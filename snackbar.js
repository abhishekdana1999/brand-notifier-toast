// Define a Snackbar class
class Snackbar {
    constructor() {
      // Create a div element for the snackbar and append it to the document body
      this.view = document.body.appendChild(document.createElement('div'));
      // Add a CSS class to the snackbar element
      this.view.classList.add('snackbar');
      // Initialize snackbar state variables
      this.isActive = false;
      this.queue = [];
      // Set the time gap between consecutive snackbars
      this.gap = 250;
      // Set the duration for which each snackbar is visible
      this.duration = 5000;
    }
  
    // Method to show a snackbar with a given message
    show(message) {
      // If another snackbar is already active, queue this message
      if (this.isActive) {
        this.queue.push(message);
        return;
      }
      // Display the snackbar
      this.isActive = true;
      this.view.textContent = message;
      this.view.classList.add('snackbar--visible');
      // Automatically hide the snackbar after a certain duration
      setTimeout(() => this.hide(), this.duration);
    }
  
    // Method to hide the snackbar
    hide() {
      // Update snackbar state
      this.isActive = false;
      this.view.classList.remove('snackbar--visible');
      // If there are queued messages, display the next one after a short gap
      if (this.queue.length) {
        setTimeout(() => this.show(this.queue.shift()), this.gap);
      }
    }
  }
  
  // Create an instance of the Snackbar class
  const snackbar = new Snackbar();
  
  // Export the snackbar instance
  module.exports = snackbar;