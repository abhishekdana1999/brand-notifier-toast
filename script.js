// Define an array of website names and their logos (for demonstration)
const websites = [
    { name: "Website 1", logo: "https://via.placeholder.com/50", bodyClass: "d-flex p-2 align-items-center gap-3", logoClass: "", textClass: "" },
    { name: "Website 2", logo: "https://via.placeholder.com/50", bodyClass: "d-flex p-2 align-items-center gap-3", logoClass: "", textClass: "" },
    { name: "Website 3", logo: "https://via.placeholder.com/50", bodyClass: "d-flex p-2 align-items-center gap-3", logoClass: "", textClass: "" },
];

window.onload = () => {
    const snackbar = new Snackbar();
    // Optional configuration
    snackbar.duration = 5000;
    snackbar.gap = 250;

    // Show a snackbar
    snackbar.show('Ohai!');
    snackbar.show('Hello hi!');
    snackbar.show('I\'m the last one in the queue!');
};