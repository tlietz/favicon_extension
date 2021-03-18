// Initialize mode to large
chrome.storage.sync.set({ mode: "large" }, function () {});

const faviconModeSelector = document.getElementsByName("favicon");
for (let i = 0; i < faviconModeSelector.length; i++) {
    faviconModeSelector[i].onchange = function () {
        const faviconSize = this.value;
        console.log(faviconSize);
        chrome.storage.sync.set({ mode: faviconSize }, function () {});
    };
}
