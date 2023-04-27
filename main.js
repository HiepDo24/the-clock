const dropdownLinks = document.querySelectorAll('.dropdown-item');
let timezone = 'America/Los_Angeles';
let lastSecond = -1;

// add click event listener to each link
dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    // get the timezone abbreviation from the link's href attribute
    timezone = link.getAttribute('href').substring(1);

    // update the time using the selected timezone
    updateTime(timezone);
  });
});

// function to update the time using the specified timezone
function updateTime(timezone) {
  const options = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const now = new Date();
  const currentSecond = now.getSeconds();
  
  if (currentSecond !== lastSecond) {
    const timeString = now.toLocaleTimeString([], options);
    const dateString = now.toLocaleDateString('en-US', { timeZone: timezone, month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById('time').innerHTML = timeString + "<br>on " + dateString;
    lastSecond = currentSecond;
  }
}

// update the time every second
setInterval(() => {
  updateTime(timezone);
}, 1000);
