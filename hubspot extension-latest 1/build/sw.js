  // await chrome.storage.session.set({'windVal':'window'});
    // await chrome.action.setPopup({popup: '../popup1.html'});
    //  await chrome.action.openPopup();
    chrome.action.onClicked.addListener(async t => {
        // await chrome.storage.session.set({'windVal':'window'});
        // await chrome.action.setPopup({popup: '../popup1.html'});
        //  await chrome.action.openPopup();
     
     
        await chrome.windows.create({
            url: chrome.runtime.getURL("../popup1.html"),
            type: "popup",
            focused: true,
            height: 630,
            width: 380,
        });
     
     
    });