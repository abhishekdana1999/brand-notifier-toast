import Snackbar from "./snackbar/snackbar";
// Define an array of website names and their logos (for demonstration)
const websites = [
    { name: "Website 1", logo: "https://via.placeholder.com/50" },
    { name: "Website 2", logo: "https://via.placeholder.com/50" },
    { name: "Website 3", logo: "https://via.placeholder.com/50" },
];

window.onload = () => {
    const snackbar = new Snackbar();
    // Optional configuration
    snackbar.duration = 2000;
    snackbar.gap = 250;
    snackbar.position = "bottom-right";

    websites.forEach((website) => {
        snackbar.show(`
        <div class="d-flex align-items-center gap-2">
            <img src="${website.logo}" alt="" srcset="" class="rounded">
            <div class="d-flex flex-col">
                <span>${website.name}</span>
            </div>
        </div>
        ` , {
            isHTML: true,
            type: "success"
        })
    })
};