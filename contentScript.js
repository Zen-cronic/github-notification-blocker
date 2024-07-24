function disableNoti() {
  if (window.location.href.includes('github.com/')) {
    console.log('At github');
  }

  const indicator = document.getElementsByClassName(
    'AppHeader-button--hasIndicator'
  );

  if (indicator.length > 0) {
    indicator[0].remove();
  }

}

chrome.storage.local.get(['disableNotiIndicator'], (res) => {
  console.log('res from contentScript', res);
  if (res.disableNotiIndicator === undefined) {
    chrome.storage.local.set({ disableNotiIndicator: true });
    disableNoti();
  }
});

setInterval(() => {
  console.log('Every 500');
  chrome.storage.local.get(['disableNotiIndicator'], (res) => {
    if (res.disableNotiIndicator) {
      disableNoti();
    }
  });
  // 0 - 1 ms => nu indicator at all

}, 500);
