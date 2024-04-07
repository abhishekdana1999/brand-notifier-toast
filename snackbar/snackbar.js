export default class Snackbar {
  constructor() {
    // Initialize snackbar state variables
    this.queue = [];
    this.toastShowed = [];
    this.currentIndex = 0; // Keep track of the current message index
    // Set the time gap between consecutive snackbars
    this.gap = 250;
    // Set the duration for which each snackbar is visible
    this.duration = 5000;
    // Set the maximum number of snackbars to be displayed at once
    this.maxStacked = 5;

    // Get the toast container from the HTML
    this.toastContainer = document.querySelector('.snackbar-container');

  }

  // Method to show a snackbar with a given message
  show(message, { type = 'normal', isHTML = false } = {}) {
    // Add the message to the queue
    this.queue.push({
      message,
      type,
      isHTML
    });

    // If no snackbar is currently active, start displaying snackbars
    if (!this.isActive) {
      this.isActive = true;
      this.displayNextSnackbar();
    }
  }

  // Method to hide the snackbar
  // Method to hide the snackbar
  hide() {
    if (this.toastShowed.length > 0) {
      const toast = this.toastShowed.shift(); // Remove the oldest toast from the array
      if (toast) {
        // Start fade-out animation
        toast.style.opacity = '0';

        // Remove the corresponding toast element from the DOM after animation
        setTimeout(() => {
          toast.remove();

          // Move to the next message in the queue
          this.currentIndex = (this.currentIndex + 1) % this.queue.length;
          // Continue displaying snackbars
          setTimeout(() => this.displayNextSnackbar(), this.gap);
        }, 300); // Wait for the animation duration (300ms in this case)
      }
    } else {
      // If no toast is currently displayed, continue to next message
      this.currentIndex = (this.currentIndex + 1) % this.queue.length;
      setTimeout(() => this.displayNextSnackbar(), this.gap);
    }
  }

  // Method to display the next snackbar in the queue
  displayNextSnackbar() {
    if (this.queue.length > 0) {
      const { message, type, isHTML } = this.queue[this.currentIndex];

      // Create a new toast element
      const toast = document.createElement('div');
      toast.classList.add(`snackbar`);
      toast.classList.add(`snackbar--${this.position}`);
      toast.classList.add(`snackbar--${type}`);
      toast.classList.add('snackbar--visible');
      toast.classList.add('snackbar--fadeIn');
      if (isHTML) {
        toast.innerHTML = message;
      } else {
        toast.textContent = message;
      }

      // Prepend the toast to the toast container (to appear stacked)
      this.toastContainer.prepend(toast);
      this.toastShowed.push(toast);

      // Remove the oldest toast if maximum stacked limit is reached
      if (this.toastShowed.length > this.maxStacked) {
        const removedToast = this.toastShowed.shift(); // Remove the oldest toast from the array
        removedToast.classList.add('snackbar--fadeOut');
        if (removedToast) {
          removedToast.addEventListener('animationend', () => {
            removedToast.remove();
          });
        }
      }

      // Schedule hiding the toast after the duration
      setTimeout(() => {
        toast.classList.remove('snackbar--visible');

        // Move to the next message in the queue
        this.currentIndex = (this.currentIndex + 1) % this.queue.length;
        // Continue displaying snackbars
        setTimeout(() => this.displayNextSnackbar(), this.gap);
      }, this.duration); // Duration for which the toast remains visible
    }
  }



  // Method to stop the infinite loop of snackbars
  stop() {
    // Clear the queue and stop further display
    this.queue = [];
    this.isActive = false;
    // Remove all active toasts from the container
    const activeToasts = this.toastContainer.querySelectorAll('.snackbar--active');
    activeToasts.forEach(toast => toast.remove());
  }
}