console.info('contentScript is running')


chrome.runtime.onMessage.addListener( // this is the message listener
  function(request, sender, sendResponse) {

    console.log({request})

    if (request.message === "copyText")
      copyToTheClipboard(request.textToCopy);
  }
);

async function copyToTheClipboard(textToCopy: string){
  const el = document.createElement('textarea');
  el.value = textToCopy;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
