
var hotel = new Object();

hotel2.name = '喜來登';
hotel2.rooms = 120;
hotel2.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
};

var elName = document.getElementById('hotelName'); 
elName.textContent = hotel.name;                  

var elRooms = document.getElementById('rooms');    
elRooms.textContent = hotel.checkAvailability();   


