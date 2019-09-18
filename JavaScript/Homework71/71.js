(function(){
 'use strict';
    
    function Vehicle(color){
        this.color = color;
    }

    Vehicle.prototype.go = function(speed){
        this.speed = speed;
        console.log("Now going at speed " + speed);
    };

    Vehicle.prototype.print = function(){
        console.log("The " + this.color + " thing is going at " + this.speed);
    };

    let myCar = new Vehicle("green");

    myCar.go(25);
    myCar.print();

    function Plane(color){
        Vehicle.call(this, color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function(speed){
        this.speed = speed;
        console.log("Now FLYING at speed " + this.speed);
    };

    let myPlane = new Plane("gray");

    myPlane.go(85);
    myPlane.print();
    

  


}());