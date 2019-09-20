(function(){
    'use strict';

    class Vehicle{
        constructor(color){
            this.color = color;
        }

        go(speed){
            this.speed = speed;
            console.log("Now going at speed " + speed);
        }

        print(){
            console.log("The " + this.color + " vehicle is going at speed " + this.speed);
        }
    }

    class Plane extends Vehicle{
        constructor(color){
            super(color);
        }

        go(speed){
            this.speed = speed;
            console.log("Now FLYING at speed " + this.speed);
        }

        print(){
            console.log("The " + this.color + " plane is flying at unearthly speeds of " + this.speed + "!");
        }
    }

    let myCar = new Vehicle("blue");

    myCar.go(55);
    myCar.print();

    let my747 = new Plane("white");

    my747.go(450);
    my747.print();

    console.log(myCar);
    console.log(my747);
     


}());