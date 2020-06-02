let downloadLinkElements = document.getElementsByClassName("text-extra-muted");
let regex = /https:\/\/cdn\.marshmallow-qa\.com\/system\/images\/[a-z0-9\-]+\.png/g;
let result = [];
for (let element of downloadLinkElements) {
  let link = element.getAttribute("href");
  if (regex.test(link)) {
    result.push(link);
  }
}

chrome.runtime.sendMessage({
  type: 'mqa-download',
  payload: result
});