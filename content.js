let favicon = "";
let domain = "";
let link = "";
let mode = ""; //mode can either be 'default' or 'large'

const externalLinks = document.body.querySelectorAll("div.TbwUpd cite.iUh30");
// Insert favicons
if (mode === "default") {
    for (i = 0; i < externalLinks.length; i += 2) {
        link = externalLinks[i];
        domain = link.innerText.split(" ")[0];
        favicon = getFavicon(domain, 16);
        favicon.classList.add("favicon-16");
        link.before(favicon);
    }
} else {
    const container = document.body.querySelector("#rcnt");
    for (i = 0; i < externalLinks.length; i += 2) {
        link = externalLinks[i];
        domain = link.innerText.split(" ")[0];
        linkPosition = link.getBoundingClientRect().top;
        favicon = getFavicon(domain, 32);
        favicon.classList.add("favicon-32");
        // offset of 170 for getbounding client rect since it measures the entire page
        favicon.style.top = linkPosition - 147 + "px";
        container.appendChild(favicon);
    }
}

// Returns the favicon of domain as a square image with the desired size in pixels,
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
