import Snackbar from "../snackbar/snackbar";
// Define an array of website names and their logos (for demonstration)
function generateWebsites(count) {
    const websites = [];
  
    for (let i = 1; i <= count; i++) {
      const website = {
        name: `Website ${i}`,
        logo: `https://via.placeholder.com/50?text=Logo${i}`
      };
      websites.push(website);
    }
  
    return websites;
  }
  

const generatedWebsites = generateWebsites(100);

window.onload = () => {
    const apiUrl = 'https://retoolapi.dev/ofcOdK/brand-notifier-allowed-websites';
    const snackbar = new Snackbar(apiUrl);
    // Optional configuration
    snackbar.duration = 2000;
    snackbar.gap = 250;
    snackbar.position = "bottom-right";

    generatedWebsites.forEach((website) => {
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