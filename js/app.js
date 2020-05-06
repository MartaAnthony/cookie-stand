

// need an array to store the hours - given

// object literal for ach store
  // min cust each hour - given
  // max customer each hour - WebGLActiveInfo// average cookie sold per customer - given for each hour
    //make an array thah holds the customers for each hour
      // need a random number between the min and the max
    //*** make an array that holds the number of cookies sold each hour***
      // multiply the customers by the average cookies each customers buys
    // this is what we want to put on the DOM
    // total cookies for the day

  var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var seattleLoc = {

  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avCookieSalePerCust: 6.3,
  custEachHour: [],
  cookiesPerHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<opHours.length; i++){
      var custThisHour = getRandomNumber(this.minCust, this.maxCust);
      this.custEachHour.push(custThisHour);
    }
  },

  calcCookiesSoldPerHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i =0; i<this.custEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.custEachHour[i] * this.avCookieSalePerCust);

      this.cookiesPerHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }

  },
  render: function(){

    seattleLoc.calcCustomersEachHour();
    seattleLoc.calcCookiesSoldPerHour();    

    //render the name of the store
    
    //get the parent element from the DOM
     //1.create an element
     //2.fill it with text content
     //3.append it

    var seattleElement = document.getElementById('seattle');
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);

    //render cookiesPerHour
    for(var i=0; i<opHours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `$${opHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      seattleElement.appendChild(listItem);
    }
    
    //this will render totalCookiesfForTheDay to the DOM
    
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    seattleElement.appendChild(listItem);

  }
}

seattleLoc.render();

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

  // cookieSales: [],
  // cookieResult: [],
  // randomCustNum: function() {
  //   return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  // },
  // cookiePerHour: function(){
  // for(var i = 0; i < this.opHours.length; i++) {
  //   this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
  // }
// },
    // totalDayCookies: function(){
    //   var totalResult = 0;
    //   for(var i = 0; i < this.cookieSales.length; i++) {
    //    totalResult += this.cookieSales[i];
    //   }
    //   this.cookieSales.push(this.cookieResult);
    //   console.log(Math.floor(this.cookieResult));
    // },

//     render: function(){
//       var parent = document.getElementById('seattle');
//       for(var i = 0; i < this.opHours.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = `${this.opHours[i]} ${this.cookieSales[i]}`; 
//         parent.appendChild(listItem);
//       }
      
//     },

    
// }

// var tokyoLoc = {
//   opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   minCust: 3,
//   maxCust: 24,
//   avCookieSale: 1.2,
//   cookieSales: [],
//   randomCustNum: function() {
//     return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
//   },
//   cookiePerHour: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
//     }

//     }
//   }


// var dubaiLoc = {
//   opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   minCust: 11,
//   maxCust: 38,
//   avCookieSale: 3.7,
//   cookieSales: [],
//   randomCustNum: function() {
//     return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
//   },
//   cookiePerHour: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
//     }

//     }
//   }

// var parisLoc = {
//   opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   minCust: 20,
//   maxCust: 38,
//   avCookieSale: 2.3,
//   cookieSales: [],
//   randomCustNum: function() {
//     return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
//   },
//   cookiePerHour: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
//     }

//     }
//   }

// var limaLoc = {
//   opHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
//   minCust: 2,
//   maxCust: 16,
//   avCookieSale: 4.6,
//   cookieSales: [],
//   randomCustNum: function() {
//     return Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
//   },
//   cookiePerHour: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.cookieSales.push(Math.floor(this.avCookieSale * this.randomCustNum()));
//     }

//     }
//   }
// seattleLoc.cookiePerHour();
// tokyoLoc.cookiePerHour();
// dubaiLoc.cookiePerHour();
// parisLoc.cookiePerHour();
// limaLoc.cookiePerHour();

// // seattleLoc.totalDayCookies();

// seattleLoc.render();