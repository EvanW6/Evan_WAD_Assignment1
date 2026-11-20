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

    // Function 1
    
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

}