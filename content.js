const baseUrl = document.location.origin;
let favicon = "";
let domain = "";
let mode = "default"; //mode can either be 'default' or 'large'

if (baseUrl == "https://www.google.com") {
    const externalLinks = document.body.querySelectorAll("cite");

    // Insert favicons
    if (mode === "default") {
        for (link of externalLinks) {
            domain = link.innerText.split(" ")[0];
            favicon = getFavicon(domain, 16);
            favicon.classList.add("favicon-16");
            link.before(favicon);
        }
    } else {
        for (link of externalLinks) {
            domain = link.innerText.split(" ")[0];
            favicon = getFavicon(domain, 32);
            favicon.classList.add("favicon-32");
            link.before(favicon);
        }
    }
}

// Returns the favicon of domain as an image,
// returns default globe favicon provided by Google if none are found.
// Where domain is of the form www.website.com or website.com
function getFavicon(domain, faviconSize) {
    const favicon_img = document.createElement("img");
    favicon_img.src =
        "https://s2.googleusercontent.com/s2/favicons?sz=" +
        faviconSize +
        "&domain=" +
        domain;
    // "https://" + domain + "/favicon.ico";
    return favicon_img;
}
