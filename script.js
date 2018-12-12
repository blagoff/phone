function Phone(brand, price, color, system)
{
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;

	Phone.prototype.printInfo = function(){
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " price is " + this.price + ".");

	Phone.prototype.showOS = function(){
		alert("Operating system is " + this.system + ".");
	}

	}
}

var iPhone6S = new Phone("Apple",2250,"silver","iOS");
var GalaxyS6 = new Phone("Samsung",500,"black", "android");
var OnePlusOne = new Phone("One",2500,"black","android");

iPhone6S.printInfo();
GalaxyS6.printInfo();
//alert(GalaxyS6.price);
GalaxyS6.showOS();