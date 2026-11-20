module.exports = {
    events:[
        {
            eventId: "E001",
            eventName: "Music Festival 2026",
            category: "Music",
            date: "2026-12-20",
            venue: "Singapore Indoor Stadium",
            status: "Upcoming"
        },
        {
            eventId: "E002",
            eventName: "Comedy Night",
            category: "Entertainment",
            date: "2026-12-25",
            venue: "The Star Theatre",
            status: "Upcoming"
        }
    ],

    tickets:[
        {
            ticketId: "T001",
            eventId: "E001",
            ticketType: "VIP",
            price: 180,
            totalQuantity: 100,
            availableQuantity: 97
        },
        {
            ticketId: "T002",
            eventId: "E001",
            ticketType: "Standard",
            price: 90,
            totalQuantity: 300,
            availableQuantity: 296
        }
    ],

    bookings:[
        {
            bookingId: "B001",
            customerName: "Alice Tan",
            eventId: "E001",
            ticketType: "VIP",
            quantity: 3,
            totalPrice: 540,
            status: "Confirmed"
        },
        {
            bookingId: "B002",
            customerName: "Ben Lim",
            eventId: "E001",
            ticketType: "Standard",
            quantity: 4,
            totalPrice: 360,
            status: "Confirmed"
        }
    ],

    // Function 1: Allow a new event to be added to the system
    
    addEvent(eventId,eventName,category,date,venue,status) {
        for (let i = 0; i < this.events.length; i++){
            if (this.events[i].eventId == eventId){
                console.log("Error: Event " + eventId + " already exists.");
                return false; // eventId already exists
            }
        }
        this.events.push(
            {
                eventId: eventId,
                eventName: eventName,
                category: category,
                date: date,
                venue: venue,
                status: status
            }
        );
        console.log("Event " + eventId + " added successfully");
        return true
    },

    getNumOfEvents(){
        return this.events.length;
    },

    // Function 2: Allow users to search for events using different criteria

    searchEvent(keyword) {
        let results = [];
        let word = keyword.toLowerCase();
        for (let i = 0; i < this.events.length; i++){
            let event = this.events[i];
            if (event.eventName.toLowerCase().includes(word) ||
                event.category.toLowerCase().includes(word) ||
                event.venue.toLowerCase().includes(word)){
                results.push(event);
            }
        }
        if (results.length > 0){
            console.log("\nSearch results for '" + keyword + "'.");
            return results;
        } 
        else {
            console.log("\nNo events found.");
        }
    },

    // Function 3: Check how many tickets remain for a particular event and ticket type

    checkTicketAvailability(eventId, ticketType, quantity) {
        for (let i = 0; i < this.tickets.length; i++){
            let ticket = this.tickets[i];
            if (ticket.eventId == eventId && ticket.ticketType == ticketType){
                if (ticket.availableQuantity >= quantity){
                    console.log("\n" + quantity + " VIP tickets for " + eventId + " available");
                    return true;
            }   
                else {
                    console.log("Error: Only " + ticket.availableQuantity + " " + ticketType + " ticket(s) left for " + eventId + ", you requested " + quantity + ".");
                    return false;
                }
            }
        }
    },

    // Function 4: Calculate the total cost of a ticket booking

    calculateTicketPrice(eventId, ticketType, quantity) {
        for (let i = 0; i < this.tickets.length; i++){
            let ticket = this.tickets[i];
            if (ticket.eventId == eventId && ticket.ticketType == ticketType){
                let total = ticket.price * quantity;
                if (quantity >= 5){
                    total = total * 0.9;
                }
                console.log("\nPrice for " + quantity + " " + ticketType + " tickets: $" + total);
                return total;
            }
        }
        console.log("\nError: " + ticketType + " tickets not found for event " + eventId + ".");
        return 0;
    },

    // Function 5: Allow customers to book tickets for an event

    bookTickets(customerName, eventId, ticketType, quantity) {
        // Find the event and make sure it is still upcoming
        let event = null;
        for (let i = 0; i < this.events.length; i++){
            if (this.events[i].eventId == eventId){
                event = this.events[i];
            }
        }
        if (event == null || event.status != "Upcoming"){
            return null;
        }

        let ticket = null;
        for (let i = 0; i < this.tickets.length; i++){
            if (this.tickets[i].eventId == eventId && this.tickets[i].ticketType == ticketType){
                ticket = this.tickets[i];
            }
        }

        if (ticket == null){
            return "Error: " + ticketType + " tickets not found for event " + eventId + ".";
        }

        // Make sure there are enough tickets
        if (ticket.availableQuantity < quantity){
            return this.checkTicketAvailability(eventId, ticketType, quantity);
        }

        // Reduce the available tickets
        for (let i = 0; i < this.tickets.length; i++){
            let ticket = this.tickets[i];
            if (ticket.eventId == eventId && ticket.ticketType == ticketType){
                ticket.availableQuantity -= quantity;
            }
        }

        // Create the booking
        let booking = {
            bookingId: "B" + String(this.bookings.length + 1).padStart(3, "0"),
            customerName: customerName,
            eventId: eventId,
            ticketType: ticketType,
            quantity: quantity,
            totalPrice: this.calculateTicketPrice(eventId, ticketType, quantity),
            status: "Confirmed"
        };
        this.bookings.push(booking);
        return booking;
    },

    // Function 6: Allow customers to cancel an existing booking and return the tickets to the available inventory

    cancelBooking(bookingId) {
        for (let i = 0; i < this.bookings.length; i++){
            let booking = this.bookings[i];
            if (booking.bookingId == bookingId && booking.status == "Confirmed"){
                // Give the tickets back
                for (let j = 0; j < this.tickets.length; j++){
                    let ticket = this.tickets[j];
                    if (ticket.eventId == booking.eventId && ticket.ticketType == booking.ticketType){
                        ticket.availableQuantity += booking.quantity;
                    }
                }
                booking.status = "Cancelled";
                console.log("\nBooking " + bookingId + " has been cancelled.");
                return true;
            }
        }
        console.log("\nUnable to cancel booking " + bookingId);
        return false; // not found or already cancelled
    },

    // Function 7: Allow an event's status to be changed

    updateEventStatus(eventId, newStatus) {
        for (let i = 0; i < this.events.length; i++){
            if (this.events[i].eventId == eventId){
                this.events[i].status = newStatus;
                console.log("\nEvent " + eventId + " status has been updated.");
                return true;
            }
        }
        console.log("\nEvent " + eventId + " not found.");
        return false; // event not found
    },
}