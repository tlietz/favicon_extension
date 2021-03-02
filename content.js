const baseUrl = document.location.origin;
let favicon = "";
let domain = "";

// Google search has 'cite' html tag for easier access to domain name so its query selector
// has a different querySelector parameter than other websites.
if (baseUrl == "https://www.google.com") {
    const externalLinks = document.body.querySelectorAll("cite");

    // Insert favicons
    for (link of externalLinks) {
        // link.style.background = "green";
        domain = link.innerText.split(" ")[0];
        favicon = getFavicon(domain);
        link.before(favicon);
    }
}

// Returns the favicon of domain as an image, returns default favicon provided by Google if none are found
// where domain is of the form www.website.com or website.com
function getFavicon(domain) {
    const favicon_img = document.createElement("img");
    favicon_img.src =
        "https://s2.googleusercontent.com/s2/favicons?domain=" + domain;
    // "https://" + domain + "/favicon.ico";
    favicon_img.classList.add("favicon");
    return favicon_img;
}

// Inserts favicons to all links
// function insertFavicons(externalLinks) {}
