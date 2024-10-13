
// This is the background script, which runs while the extension is available on the webspages. 
//It detects the conditions for when the content script needs to execute. 
//The code below is for the background script to send a message of sorts to the content script, that when the pop-up is clicked, execute the content script.

  chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  files: ['content.js']
	});
  });