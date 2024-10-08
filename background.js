chrome.action.onClicked.addListener(handleClick);

function handleClick(){
  chrome.runtime.openOptionsPage()
}
