// javascript built in objects 
//1.Math object which provides mathematical functions
console.log(Math.PI)//returns value of PI
console.log(Math.max(1,55,66,24,56))// outputs largest value
console.log(Math.min(55,66,3,44,2,66))//outputs minimum value
console.log(Math.round(1.6))//round off 1.6 to 2
console.log(Math.sqrt(5));//outputs square root of 5

//2.Date object- provides functionalities to handle data and time
let current=new Date();
console.log(current);//outputs current date and time
let date=new Date('march 20 2005 8:15');//ouputs custom date, useful when we want to use custom date
console.log(date);
console.log(date.getMinutes());//outputs minutes in the time from date

//3. string object-used to do various operatings with strings
let str= new String("welcome to javascript");
console.log(str.length);//outputs the length of the string
console.log(str.at(5));//return character at indeex 5
console.log(str.match("to"));//returns true if the 'to' is present in the string

//4.RegExp - used to validate the character pattern;
let regex=new RegExp("java");
str="this is javascript";
console.log(regex.test(str));//return true or false whetherpattern is matching or not
console.log(str.match(regex));//Returns an array of matches or null if no match is found
