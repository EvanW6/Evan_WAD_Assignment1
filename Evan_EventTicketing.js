// Function 1
let eventTicketing = {
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

    // Function 1
    
    addEvent(eventId,eventName,category,date,venue,status) {
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
    },

    getNumOfEvents(){
        return this.events.length;
    },

}

module.exports = eventTicketing;