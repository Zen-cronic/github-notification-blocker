const checkBoxNoti = document.getElementById('gh-checkbox-noti');
console.log("Jello from popup");

chrome.storage.local.get(['disableNotiIndicator'], (res) => {
  console.log("from popup: ",{ res });
  if (res) {
    checkBoxNoti.checked = res.disableNotiIndicator;
  }
});

checkBoxNoti.addEventListener('change', () => {
    console.warn("Check box noti changed");
  if (checkBoxNoti.checked) {
    chrome.storage.local.set({ disableNotiIndicator: true });
  } else {
    chrome.storage.local.set({ disableNotiIndicator: false });
  }
});
