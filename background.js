const injectDownloader = (info, tab) => {
  if (info.menuItemId !== 'mqa-download') {
    return;
  }

  chrome.tabs.executeScript(tab.id, {
    file: 'downloader.js'
  })
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "mqa-download") {
    for (let link of request.payload) {
      chrome.downloads.download({url: link})
    }
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "mqa-download",
    title: "Download Marshmallows!",
    type: 'normal',
    contexts: ['page']
  });
});

chrome.contextMenus.onClicked.addListener(injectDownloader);
