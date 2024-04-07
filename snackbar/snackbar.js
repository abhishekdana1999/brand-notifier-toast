export default class Snackbar {
  constructor(apiUrl) {
    this.allowedWebsites = [];

    // Call API to fetch allowed websites
    this.fetchAllowedWebsites(apiUrl)
      .then(websites => {
        this.allowedWebsites = websites.map(site => site.allowedWebsites);
        this.initializeSnackbar();
      })
      .catch(error => {
        console.error('Failed to fetch allowed websites:', error);
      });
  }

  async fetchAllowedWebsites(apiUrl) {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch allowed websites (status ${response.status})`);
    }
    const data = await response.json();
    return data || [];
  }

  initializeSnackbar() {
    this.queue = [];
    this.isActive = false;
    this.toastContainer = document.querySelector('.snackbar-container');
    this.gap = 250;
    this.duration = 5000;
    this.maxStacked = 5;

    if (!this.toastContainer) {
      console.error('Snackbar container not found.');
      return;
    }

    const currentWebsite = window.location.href;
    console.log(currentWebsite , this.allowedWebsites)
    if (this.allowedWebsites.find(website => website.allowedWebsites == currentWebsite)) {
      this.isActive = true;
      this.displayNextSnackbar();
    }
  }

  show(message, { type = 'normal', isHTML = false } = {}) {
    if (!this.isActive) return;

    this.queue.push({
      message,
      type,
      isHTML
    });

    if (!this.isActive) {
      this.isActive = true;
      this.displayNextSnackbar();
    }
  }

  hide() {
    if (this.toastShowed.length > 0) {
      const toast = this.toastShowed.shift();
      if (toast) {
        toast.style.opacity = '0';
        setTimeout(() => {
          toast.remove();
          this.currentIndex = (this.currentIndex + 1) % this.queue.length;
          setTimeout(() => this.displayNextSnackbar(), this.gap);
        }, 300);
      }
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.queue.length;
      setTimeout(() => this.displayNextSnackbar(), this.gap);
    }
  }

  displayNextSnackbar() {
    if (this.queue.length > 0) {
      const { message, type, isHTML } = this.queue[this.currentIndex];

      const toast = document.createElement('div');
      toast.classList.add('snackbar');
      toast.classList.add('snackbar--visible');
      toast.classList.add('snackbar--fadeIn');
      if (isHTML) {
        toast.innerHTML = message;
      } else {
        toast.textContent = message;
      }

      this.toastContainer.prepend(toast);
      this.toastShowed.push(toast);

      if (this.toastShowed.length > this.maxStacked) {
        const removedToast = this.toastShowed.shift();
        removedToast.classList.add('snackbar--fadeOut');
        if (removedToast) {
          removedToast.addEventListener('animationend', () => {
            removedToast.remove();
          });
        }
      }

      setTimeout(() => {
        toast.classList.remove('snackbar--visible');
        this.currentIndex = (this.currentIndex + 1) % this.queue.length;
        setTimeout(() => this.displayNextSnackbar(), this.gap);
      }, this.duration);
    }
  }

  stop() {
    this.queue = [];
    this.isActive = false;
    const activeToasts = this.toastContainer.querySelectorAll('.snackbar--active');
    activeToasts.forEach(toast => toast.remove());
  }
}
