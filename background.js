chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    try {
        //console.log(tab);
        if (tab.url.includes('affelseaeinera') && tab.status!='unloaded') {
            console.log(tab.status);
            chrome.tabs.remove(tabId, function () { });


        }
    } catch (error) {
        console.log("Erroooo")
    }
});