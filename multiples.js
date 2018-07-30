/*Vessela Lytle, S# 547557, COP 2801
To round off, an integer i to the next largest even multiple of another integer j, the 
following formula can be used: 
nextMultiple = i + j - i % j 
multiples.js finds and displays the next largest even multiple 
for the following values of i and j: 
i = 365, 12258, 996
j = 7, 23, 4
*/


var i = 365;
var j = 7;
var nextMultiple = i + j - (i % j);
console.log (nextMultiple);


var i = 12258;
var j = 23;
var nextMultiple = i + j - (i % j);
console.log (nextMultiple);

var i = 996;
var j = 4;
var nextMultiple = i + j - (i % j);
console.log (nextMultiple);
	




 