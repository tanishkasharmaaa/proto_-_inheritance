function vehicle(brand,model,speed,fuelType){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.fuelType=fuelType;
}
vehicle.prototype.accelerate=function(){
    this.speed+=10;
    console.log(`${this.brand} ${this.model} is accelerating . Current speed:-${this.speed} mph` )
    
}
vehicle.prototype.brake=function(){
    this.speed-=5;
    console.log(`${this.brand} ${this.model} is braking. Current Speed ${this.speed} mph`)
}
vehicle.prototype.Refuel=function(){
    console.log(`${this.brand} ${this.model} is refueling`)
}
function car(brand,model,speed,fuelType,numberofwheels){
   
    vehicle.call(this,brand,model,speed,fuelType,);
    this.numberofwheels=numberofwheels;
}


car.prototype=Object.create(vehicle.prototype);

car.prototype.honk=function(){
    // console.log(`${this.brand}`)
}
function Airplane(brand,model,speed,fuelType,numberofwheels){
    car.call(this,brand,model,speed,fuelType,numberofwheels);
    this.numberOfEngins=this.numberOfEngins;
    this.hasLandingGear=this.hasLandingGear;
}
Airplane.prototype=Object.create(car.prototype);
Airplane.prototype.takeOff=function()
{
    console.group(`${this.brand} ${this.model} is taking Off`)
}


let mycar=new car("Audi","camry",0,"gasoline");
mycar.accelerate();
mycar.brake();
mycar.Refuel();
mycar.honk();

let myAirplane=new Airplane("AirIndia",798,0,"jet fuel",4,true)
myAirplane.accelerate();
myAirplane.takeOff();
myAirplane.Refuel()








