var Plant = function (options) {
	var options = options || {};
	this.indoor = options.indoor || false;
	this.outdoor = options.outdoor || false;
	this.species = options.species;
	this.water = function () {
		this.watered = true;
	};
};




var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

var fruits = ['fig', 'strawberry', 'plum', 'pineapple'];



//_.pluck(list, propertyName) 
//A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.


//_.last(array, [n]) 
//Returns the last element of an array. Passing n will return the last n elements of the array.


//_.first(array, [n]) Alias: head, take 
//Returns the first element of an array. Passing n will return the first n elements of the array.


//_.random(min, max) 
//Returns a random integer between min and max, inclusive. If you only pass one argument, it will return a number between 0 and that number.



