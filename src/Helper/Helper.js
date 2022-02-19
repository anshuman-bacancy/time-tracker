const shortid = require('shortid');

function getCurrentDate() {
    const currentDate = new Date();
    const currentFullDate = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); 
    const currentYear = currentDate.getFullYear();

    return currentFullDate + "/" + currentMonth + "/" + currentYear;
}

function getShortID() {
  const shortId = shortid.generate();
  return shortId;
}

export { getCurrentDate, getShortID };