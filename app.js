


var seattleLoc = {
  opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  minCust: 23,
  maxCust: 65,
  avCookieSale: 6.3,
  cookieSales: [],
  randomCustNum: function() {
    return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },
  cookiePerHour: function(){
  for (var i = 0; i < this.opHours.length; i++) {
    this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
  }
}
}

var tokyoLoc = {
  opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  minCust: 3,
  maxCust: 24,
  avCookieSale: 1.2,
  cookieSales: [],
  randomCustNum: function() {
    return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },
  cookiePerHour: function() {
    for (var i = 0; i < this.opHours.length; i++) {
      this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
    }

    }
  }


var dubaiLoc = {
  opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  minCust: 11,
  maxCust: 38,
  avCookieSale: 3.7,
  cookieSales: [],
  randomCustNum: function() {
    return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },
  cookiePerHour: function() {
    for (var i = 0; i < this.opHours.length; i++) {
      this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
    }

    }
  }

var parisLoc = {
  opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  minCust: 20,
  maxCust: 38,
  avCookieSale: 2.3,
  cookieSales: [],
  randomCustNum: function() {
    return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },
  cookiePerHour: function() {
    for (var i = 0; i < this.opHours.length; i++) {
      this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
    }

    }
  }

var limaLoc = {
  opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
  minCust: 2,
  maxCust: 16,
  avCookieSale: 4.6,
  cookieSales: [],
  randomCustNum: function() {
    return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },
  cookiePerHour: function() {
    for (var i = 0; i < this.opHours.length; i++) {
      this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
    }

    }
  }
seattleLoc.cookiePerHour();
tokyoLoc.cookiePerHour();
dubaiLoc.cookiePerHour();
parisLoc.cookiePerHour();
limaLoc.cookiePerHour();


