// Try to click "Skip intro" button in Netflix on regular intervals.

// DOM selector for the button.
const BUTTON_SELECTOR = '#netflix-player > div.skip-credits-container-node > div > a'

// Set the regular interval to try and click the button.
const CLICK_INTERVAL = 1000

// Query the DOM for the button and click it if found.
function skipIntro() {
  let skipButton = document.querySelector(BUTTON_SELECTOR)
  if (skipButton) { skipButton.click() }
}

// Try to click "Skip intro" every two seconds.
setInterval(skipIntro, CLICK_INTERVAL)
