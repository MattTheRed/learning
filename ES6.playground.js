"use strict";
/* CONSTANTS */
function constants(){
	var a = [1,2,3];
	const TEST = a;
	a.push(4);
	console.log(TEST);
}
// constants();

/*BLOCK SCOPING*/
function blockScoping(){
	var i = 1;
	if (i) {
		let i = 6;
		console.log(i);
	}

	var results = [];

	function async(num){
		results.push(num);
	};
	for (var i = 0; i < [0,1,2,3,4].length; i++) {

		setTimeout(function(){
			async(i);
		},10)
	}
	setTimeout(function(){
		console.log(results);
	}, 100)
	
};

// blockScoping();
function blockScopingII(){
	var a = 2;
	{ 
		let a = 5;
		console.log(a);
	}
	console.log(a)
}

blockScopingII();

/*	SPREAD + REST */
// function spread() {
// 	var listOne = [1,2,3];
// 	var listTwo = [0, ...listOne, 0,0];
// 	console.log(listOne);
// };

// spread();

// function gather(){
// 	function args(main, ...args){
// 		console.log(args)
// 	}

// 	args(true, 1,2,3,4);
// }

// gather();

// function test(a=10){
// 	console.log(a);
// };
// console.log(a);

function greeting(strings, values){
	console.log(strings);
	console.log(values);
	return 'HOWDY'
}

var name = 'test';
greeting`DUDE THIS IS NEAT ${name}`;


// function Test () {

// };

// Test._id = 5;

// // Test.get id (){ return this._id}

// console.log(Test.id);

// var Test2 = {
// 	_id:6,
// 	get id(){return this._id},
// 	get taco(){return this._id},
// 	methodOne: function(){
// 		console.log('WORKING!' + this.id + this._id);
// 	}
// };

// console.log(Test2.taco);

// var test = new Object(Test2);
// console.log(test.taco);

// setTimeout(function(){
// 	test.methodOne();
// }, 100);
// test.methodOne();