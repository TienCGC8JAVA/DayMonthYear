let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;


    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }

    this.setDay = function(day) {
          return  day;
    }
    this.setMonth = function(month) {
        return  month;
    }
    this.setYear = function(year) {
        return year;
    }
};


//let date = new MyDate(8, 8, 1994);

//let day = date.getDay();

//let month = date.getMonth();

//let year = date.getYear();

//alert(day + "/" + month + "/" + year);

let date = new MyDate();

let day = date.setDay(8);

let month = date.setMonth(4);

let year = date.setYear(2019);

alert(day + "/" + month + "/" + year);