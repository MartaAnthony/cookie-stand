    var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

    function Location(name, minCust, maxCust, avCookieSalePerCust){
      this.locationName = name;
      this.minCust = minCust;
      this.maxCust = maxCust;
      this.avCookieSalePerCust = avCookieSalePerCust;
      this.custEachHour = [];
      this.cookiesPerHour = [];
      this.totalCookiesForTheDay = 0;
    };

    Location.prototype.getRandomNumber = function(){
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    };

    Location.prototype.calcCustomersEachHour = function(){
      for(var i=0; i<opHours.length; i++){
        var custThisHour = this.getRandomNumber();
        this.custEachHour.push(custThisHour);
      };
    };

    Location.prototype.calcCookiesSoldPerHour = function(){
      for(var i =0; i<this.custEachHour.length; i++){
        var wholeCookiesSoldForOneHour = Math.ceil(this.custEachHour[i] * this.avCookieSalePerCust);
        this.cookiesPerHour.push(wholeCookiesSoldForOneHour);
        this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
      };
    }

    var seattleLoc = new Location('Seattle', 23, 65, 6.3);

    

  //   render = function(){
    
  //     seattleLoc.calcCustomersEachHour();
  //     seattleLoc.calcCookiesSoldPerHour();    
  
  //     //render the name of the store
      
  //     //get the parent element from the DOM
  //      //1.create an element
  //      //2.fill it with text content
  //      //3.append it
  
  //     var seattleElement = document.getElementById('seattle');
  //     var listItem = document.createElement('li');
  //     listItem.textContent = this.name;
  //     seattleElement.appendChild(listItem);
  
  //     //render cookiesPerHour
  //     for(var i=0; i<opHours.length; i++){
  //       listItem = document.createElement('li');
  //       listItem.textContent = `$${opHours[i]}: ${this.cookiesPerHour[i]} cookies`;
  //       seattleElement.appendChild(listItem);
  //     }
      
  //     //this will render totalCookiesfForTheDay to the DOM
      
  //     listItem = document.createElement('li');
  //     listItem.textContent = this.totalCookiesForTheDay;
  //     seattleElement.appendChild(listItem);
  
  //   }
  // }
  
  // seattleLoc.render();

  //   // var seattleLoc = {
    
  //   //   name: 'Seattle',
  //   //   minCust: 23,
  //   //   maxCust: 65,
  //   //   avCookieSalePerCust: 6.3,
  //   //   custEachHour: [],
  //   //   cookiesPerHour: [],
  //   //   totalCookiesForTheDay: 0,
    
  //   //   calcCustomersEachHour: function(){
  //   //     // calculate the customers each hour and populate the array
  //   //     for(var i=0; i<opHours.length; i++){
  //   //       var custThisHour = getRandomNumber(this.minCust, this.maxCust);
  //   //       this.custEachHour.push(custThisHour);
  //   //     }
  //   //   },
    
  //   //   calcCookiesSoldPerHour: function(){
  //   //     // multiply the customers by the average cookies each customers buys
  //   //     for(var i =0; i<this.custEachHour.length; i++){
  //   //       var wholeCookiesSoldForOneHour = Math.ceil(this.custEachHour[i] * this.avCookieSalePerCust);
    
  //   //       this.cookiesPerHour.push(wholeCookiesSoldForOneHour);
    
  //   //       this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
  //   //     }
    
      // },