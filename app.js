const eventTicketing = require("./Evan_EventTicketing.js");

// Function 1: Add Event

eventTicketing.addEvent("E003", "Christmas Musical", "Music", "2026-12-24", "Snowy Theatre", "Upcoming");
eventTicketing.addEvent("E004", "Family Bonding", "Entertainment", "2026-12-07", "Bishan Park", "Upcoming");

console.log("Total no of events: ", eventTicketing.getNumOfEvents());

// Function 2: Search Event

console.log(eventTicketing.searchEvent("music"));

// Function 3: Check Ticket Availability

console.log(eventTicketing.checkTicketAvailability("E001", "VIP", 5));
console.log(eventTicketing.checkTicketAvailability("E001", "Standard", 500));

// Function 4: Calculate Ticket Price

console.log(eventTicketing.calculateTicketPrice("E001", "VIP", 2));
console.log(eventTicketing.calculateTicketPrice("E001", "VIP", 5));

// Function 5: Book Tickets

console.log(eventTicketing.bookTickets("Clara Ng", "E001", "VIP", 2));

// Function 6: Cancel Booking

console.log(eventTicketing.cancelBooking("B003"));

// Function 7: Update Event Status

console.log(eventTicketing.updateEventStatus("E002", "Cancelled"));
console.log(eventTicketing.searchEvent("comedy night"));