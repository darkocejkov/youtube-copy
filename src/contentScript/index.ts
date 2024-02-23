console.info('contentScript is running', {window, document})

type ACTIONS = "clipboardWrite"

chrome.runtime.onMessage.addListener(async (req) => {
  console.log("content on message", {req, document, navigator})

  switch(req.action as ACTIONS){
    case "clipboardWrite":
      console.log("[content] writing to clip")
      await navigator.clipboard.writeText(req.message)
      break;

  }

})

