var app = angular.module("formaApp", ['moment-picker']);

app.controller("FormaController", function($http, $log){
  
  var controller = this;
  controller.formations = [];
  
  $http.get("https://evently-nbwns.c9users.io/api/xavier/events")
       .then(function(response){
         controller.formations = response.data;
         $log.log(response.data);
       })
       .catch(function(){
       })
       .finally(function(){
       })
       
       
  this.newName="";
  this.newAvailableSpots="";
  this.newDate="";
  this.newHourStart="";
  this.newHourEnd="";
  this.newPlaceName="";
  this.newPlaceStreet="";
  this.newPlaceNumber="";
  this.newPlaceZip="";
  this.newPlaceCity="";
  
  this.addForma = function() {
      
        this.name = this.newName;
        this.availableSpots = this.newAvailableSpots;
        this.date = this.newDate;
        this.hourStart = this.newHourStart;
        this.hourEnd = this.newHourEnd;
        this.placeName = this.newPlaceName;
        this.placeStreet = this.newPlaceStreet;
        this.placeNumber = this.newPlaceNumber;
        this.placeZip = this.newPlaceZip;
        this.placeCity = this.newPlaceCity;
        
        $http.post("https://evently-nbwns.c9users.io/api/xavier/events", 
           {
            name : this.name,
            availableSpots: this.availableSpots,
            datetime : {
                date:this.date,
                timeStart:this.hourStart,
                timeEnd:this.hourEnd
            },
            place : {
                name:this.placeName,
                street:this.placeStreet,
                number:this.placeNumber,
                zip:this.placeZip,
                city:this.placeCity
            }
          }         
        )
            .then(function(response){
                this.newName="";
                this.newAvailableSpots="";
                this.newDate="";
                this.newHourStart="";
                this.newHourEnd="";
                this.newPlaceName="";
                this.newPlaceStreet="";
                this.newPlaceNumber="";
                this.newPlaceZip="";
                this.newPlaceCity="";
            })
            .catch(function(reponse){
                $log.log("error")
            })
        
    };
  
});