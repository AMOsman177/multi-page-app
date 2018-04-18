'use strict';

function Person(name, number, email){

	this.name = name;
	this.number = number;
	this.email = email; 
}
var person1 = new Person('Ahmed', '12345', 'Ahmed@gmail.com');
var person2 = new Person('Zubair', '54321', 'Zubair@gmail.com');

function update(name, number, email){
	this.name = name;
	this.number = function updateNumber(number){
		number = alert('Enter your new number');
	}
	this.email = email;
}
Person();