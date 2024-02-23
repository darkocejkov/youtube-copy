import {clipboard} from "@extend-chrome/clipboard";

console.log('background is running')


chrome.commands.onCommand.addListener(function (command) {

  switch (command) {
    case 'youtube-copy':
      copyYoutubeUrl();
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});


function copyYoutubeUrl(){
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];

    var {url} = activeTab

    if(url){
      const isYoutube = /^(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([A-Za-z0-9-_]{11})/i.test(url)

      chrome.runtime.connect()

      chrome.runtime.sendMessage({
        message: 'copyText',
        textToCopy: 'fart'
      }).then()

      if(isYoutube){
        // chrome.runtime.sendMessage('copyText')
      }
    }
  });
}
