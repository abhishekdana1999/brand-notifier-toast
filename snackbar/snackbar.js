// Define a Snackbar class
export default class Snackbar {
  constructor() {
    // Create a div element for the snackbar and append it to the document body
    this.view = document.body.appendChild(document.createElement('div'));
    // Add a CSS class to the snackbar element
    this.view.classList.add('snackbar');
    // Initialize snackbar state variables
    this.isActive = false;
    this.queue = [];
    this.currentIndex = 0; // Keep track of the current message index
    // Set the time gap between consecutive snackbars
    this.gap = 250;
    // Set the duration for which each snackbar is visible
    this.duration = 5000;
    // Set the position for snackbar container
    this.position = 'bottom-left' || 'bottom-right' || 'top-left' || 'top-right' || 'center'
  }

  // Method to show a snackbar with a given message
  show(message, { type = 'normal', isHTML = false }) {
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
  hide() {
    // Update snackbar state
    this.isActive = false;
    this.view.classList.remove('snackbar--visible');
    // Continue displaying next snackbars in the queue
    this.displayNextSnackbar();
  }

  // Method to display the next snackbar in the queue
  displayNextSnackbar() {
    if (this.queue.length > 0) {
      const { message, type, isHTML } = this.queue[this.currentIndex];
      if (isHTML) {
        this.view.innerHTML = message;
      } else {
        this.view.textContent = message;
      }
      this.view.classList.add(`snackbar--${this.position}`);
      this.view.classList.add(`snackbar--${type}`);
      this.view.classList.add('snackbar--visible');
      setTimeout(() => {

        this.view.classList.remove('snackbar--visible');
        // Move to the next message in the queue
        this.currentIndex = (this.currentIndex + 1) % this.queue.length;
        // Continue displaying snackbars
        setTimeout(() => this.displayNextSnackbar(), this.gap);
      }, this.duration);
    }
  }

  // Method to stop the infinite loop of snackbars
  stop() {
    // Clear the queue and stop further display
    this.queue = [];
    this.isActive = false;
    this.view.classList.remove('snackbar--visible');
  }
}


