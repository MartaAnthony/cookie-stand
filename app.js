


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



// var tokyoLoc = {
//   minCust = 3,
//   maxCust = 24,
//   avCookieSale = 1.2,
//   randomCustNum = function(minCust, maxCust) {
//     return Math.random() * ((macCust +1) - minCust) + minCust;
//   }
// };

// var dubaiLoc = {
//   minCust ='11',
//   maxCust = '38',
//   avCookieSale = '3.7',
//   randomCustNum = function(minCust, maxCust) {
//     return Math.random() * ((macCust +1) - minCust) + minCust;
//   }
// };

// var parisLoc = {
//   minCust ='20',
//   maxCust = '38',
//   avCookieSale = '2.3',
//   randomCustNum = function(minCust, maxCust) {
//     return Math.random() * ((macCust +1) - minCust) + minCust;
//   }
// };

// var limaLoc = {
//   minCust ='2',
//   maxCust = '16',
//   avCookieSale = '4.6',
//   randomCustNum = function(minCust, maxCust) {
//     return Math.random() * ((macCust +1) - minCust) + minCust;
//   }
// };



