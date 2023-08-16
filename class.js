class CalendarDay {
    // private fields
    #month;
    #day;
    #year;
    constructor (day, month, year) {
        this.month = month;
        this.day = day;
        this.year = year;
    }
    // public method
    toString() {
        return `${this.day}-${this.month}-${this.year}`
    }
}

// Using our new class
let day1 = new CalendarDay(7, 3, 2023);
console.log(day1.toString()); // Output 7-3-2023
