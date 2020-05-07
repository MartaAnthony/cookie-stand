var opHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var storeLocArray = [];

function StoreLocation(name, minCust, maxCust, avCookieSalePerCust){
  this.locationName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avCookieSalePerCust = avCookieSalePerCust;
  this.custEachHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesForTheDay = 0;
  storeLocArray.push(this);
}
StoreLocation.prototype.getRandomNumber = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};
StoreLocation.prototype.calcCustomersEachHour = function(){
  for(var i=0; i<opHours.length; i++){
    var custThisHour = this.getRandomNumber();
    this.custEachHour.push(custThisHour);
  }
};
StoreLocation.prototype.calcCookiesSoldPerHour = function(){
  for(var i =0; i<this.custEachHour.length; i++){
    var wholeCookiesSoldForOneHour = Math.ceil(this.custEachHour[i] * this.avCookieSalePerCust);
    this.cookiesPerHour.push(wholeCookiesSoldForOneHour);
    this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
  }
};
StoreLocation.prototype.render = function(){
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
  }
  var tableDataTot = document.createElement('td');
  tableDataTot.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(tableDataTot);

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
  }
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHeader);
  parentElement.appendChild(tableRow);
}

var seattleLoc = new StoreLocation('Seattle', 23, 65, 6.3);

var tokyoLoc = new StoreLocation('Tokyo', 3, 24, 1.2);

var dubaiLoc = new StoreLocation('Dubai', 11, 38, 3.7);

var parisLoc = new StoreLocation('Paris', 20, 38, 2.3);

var limaLoc = new StoreLocation('Lima', 2, 16, 4.6);

function footerCreator(){
  var parentElement = document.getElementById('table');
  var footerRow = document.createElement('tr');
  footerRow.id = 'totals';
  var footerHead = document.createElement('th');
  footerHead.textContent = 'Totals';
  footerRow.appendChild(footerHead);

  var totalOfAllTotals = 0;

  for(var j = 0; j < opHours.length; j++){
    var allLocationsCookiesPerHour = 0;

    for(var i = 0; i < storeLocArray.length; i++){
      allLocationsCookiesPerHour += storeLocArray[i].cookiesPerHour[j];
    }

    var tableFooter = document.createElement('th');
    tableFooter.textContent = allLocationsCookiesPerHour;
    totalOfAllTotals += allLocationsCookiesPerHour;
    footerRow.appendChild(tableFooter);
  }
  var tableData = document.createElement('td');
  tableData.textContent = totalOfAllTotals;
  footerRow.appendChild(tableData);

  parentElement.appendChild(footerRow);
}

function handleFormSubmit(event){
  event.preventDefault();
  var name = event.target.locName.value;
  var minCustomers = event.target.minCust.value;
  var maxCustomers = event.target.maxCust.value;
  var avCookieSale = event.target.avCookieSalePerCust.value;
  var newLoc = new StoreLocation(name, minCustomers, maxCustomers, avCookieSale);
  var totalRow = document.getElementById('totals');
  totalRow.parentNode.removeChild(totalRow);
  newLoc.render();
  footerCreator();
}
var form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmit);

headerCreator();

for(var i=0; i<storeLocArray.length; i++){
  storeLocArray[i].render();
}
footerCreator();
