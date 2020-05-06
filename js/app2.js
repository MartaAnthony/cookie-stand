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
    
    
    Location.prototype.render = function(){
      this.calcCustomersEachHour();
      this.calcCookiesSoldPerHour();

      var parentElement = document.getElementById('table');
    
      var tableRow = document.createElement('tr');

      var tableHeader = document.createElement('th');
      tableHeader.textContent = this.locationName;
      tableRow.appendChild(tableHeader);
    
      for(var i = 0; i<this.cookiesPerHour.length; i++){
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[i];
        tableRow.appendChild(tableData);
        };

        //WHY ISNT IT WORKING
      // var tableDataTot = document.createElement('td');
      // tableDataTot.textContent = this.totalCookiesForTheDay;
      // tableRow, appendChild(tableData);

      parentElement.appendChild(tableRow);
    };

    function headerCreator(){
      var parentElement = document.getElementById('table');
      var tableRow = document.createElement('tr');
      var tableHeader = document.createElement('th');
      tableHeader.textContent = '';
      tableRow.appendChild(tableHeader);

      for(var i = 0; i<opHours.length; i++){
        var tableHeader = document.createElement('th');
        tableHeader.textContent = opHours[i];
        tableRow.appendChild(tableHeader);
      };

      var tableHeader = document.createElement('th');
      tableHeader.textContent = 'Daily Location Total';
      tableRow.appendChild(tableHeader);
      parentElement.appendChild(tableRow);
      };

    headerCreator();

    var seattleLoc = new Location('Seattle', 23, 65, 6.3);
    seattleLoc.render();

    var tokyoLoc = new Location('Tokyo', 3, 24, 1.2);
    tokyoLoc.render();

    var dubaiLoc = new Location('Dubai', 11, 38, 3.7);
    dubaiLoc.render();

    var parisLoc = new Location('Paris', 20, 38, 2.3);
    parisLoc.render();
    
    var limaLoc = new Location('Lima', 2, 16, 4.6);
    limaLoc.render();
