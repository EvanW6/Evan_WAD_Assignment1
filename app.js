const eventTicketing = require("./Evan_EventTicketing.js");

// Function 1

eventTicketing.addEvent("E003", "Christmas Musical", "Music", "2026-12-24", "Snowy Theatre", "Upcoming");
eventTicketing.addEvent("E004", "Family Bonding", "Entertainment", "2026-12-07", "Bishan Park", "Upcoming");

console.log("Total no of events: ", eventTicketing.getNumOfEvents());

// Function 2

console.log(eventTicketing.searchEvent("music"));

// Function 3

console.log(eventTicketing.checkTicketAvailability("E001", "VIP", 5));
console.log(eventTicketing.checkTicketAvailability("E001", "Standard", 500));