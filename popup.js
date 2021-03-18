chrome.storage.sync.get(["mode"], function (obj) {
    const mode = obj.mode;
    const faviconModeSelector = document.getElementsByName("favicon");
    for (let i = 0; i < faviconModeSelector.length; i++) {
        const radioButton = faviconModeSelector[i];
        if (radioButton.value == mode) {
            radioButton.checked = true;
        }
        radioButton.onchange = function () {
            const faviconSize = this.value;
            chrome.storage.sync.set({ mode: faviconSize }, function () {});
        };
    }
});
