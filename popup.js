const checkBoxNoti = document.getElementById('gh-checkbox-noti');

chrome.storage.local.get(['disableNotiIndicator'], (res) => {
  if (res) {
    checkBoxNoti.checked = res.disableNotiIndicator;
  }
});

checkBoxNoti.addEventListener('change', () => {
  if (checkBoxNoti.checked) {
    chrome.storage.local.set({ disableNotiIndicator: true });
  } else {
    chrome.storage.local.set({ disableNotiIndicator: false });
  }
});
