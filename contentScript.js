function disableNoti() {
  const indicator = document.getElementsByClassName(
    'AppHeader-button--hasIndicator'
  );

  if (indicator.length > 0) {
    indicator[0].remove();
  }

  //   if (document.getElementsByTagName("main")) {
  //     if (document.getElementsByTagName("main")[0]) {
  //       document.getElementsByTagName("main")[0].remove();
  //     }
  //   }
}

chrome.storage.local.get(['disableNotiIndicator'], (res) => {
  if (res.disableNotiIndicator === undefined) {
    chrome.storage.local.set({ disableNotiIndicator: true });
    disableNoti();
  }
});
