let favicon = "";
let domain = "";
let link = "";
var mode = "";

chrome.storage.sync.get(["mode"], function (obj) {
    const mode = obj.mode;
    insertFavicons(mode);
});

function insertFavicons(mode) {
    const externalLinks = document.body.querySelectorAll(
        "div.TbwUpd cite.iUh30"
    );
    for (i = 0; i < externalLinks.length; i += 2) {
        link = externalLinks[i];
        domain = link.innerText.split(" ")[0];
        if (mode == "large") {
            favicon = getFavicon(domain, 32);
            favicon.classList.add("favicon-32");
        } else {
            favicon = getFavicon(domain, 16);
            favicon.classList.add("favicon-16");
        }
        link.before(favicon);
    }
}

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
