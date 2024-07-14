var notificationElement = document.getElementById(
  "AppHeader-notifications-button"
);
notificationElement.innerHTML = `
#AppHeader-notifications-button::before {
    content: none !important;
}
`;
// Step 2: Create a new style element
var style = document.createElement("style");

// Step 3: Add a CSS rule to disable the ::before pseudo-element
style.innerHTML = `
    #AppHeader-notifications-button::before {
        content: none !important;
    }
`;

// Step 4: Append the style element to the document's head
document.head.appendChild(style);

function disableNotification() {
  style.innerHTML = `
          #AppHeader-notifications-button::before {
              content: none !important;
          }
      `;

  document.head.appendChild(style);
}

function restoreBeforePseudoElement() {
  if (style && style.parentNode) {
    style.parentNode.removeChild(style);
  }
}

disableNotification();

restoreBeforePseudoElement();
