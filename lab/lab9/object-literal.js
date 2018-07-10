var hotel = {
  name : '東方文華酒店',
  rooms1 : 40,
  booked1 : 25,
  
  checkAvailability1 : function() {
    return this.rooms1 - this.booked1;
  }

};


                   

var elRooms = document.getElementById('rooms1');    
elRooms.textContent = hotel.checkAvailability1(); 

var hotel2 = new Object();

hotel2.name = '喜來登';
hotel2.rooms = 120;
hotel2.booked = 77;

hotel2.checkAvailability2 = function() {
  return this.rooms - this.booked;  
};

              
var elName = document.getElementById('hotelName1' , 'hotelName2'); 
elName.innerHTML = hotel.name + "," + hotel2.name;

var elRooms = document.getElementById('rooms1', 'rooms');    
elRooms.textContent = hotel.checkAvailability1()+ "," + hotel2.checkAvailability2();   


