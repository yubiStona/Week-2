function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

//addig properties to the prototype of constructor function Person
Person.prototype.gender="male";//this propet=rty will be inherited by all the object 

const person1=new Person("yubi","stona");
const person2=new Person("alex","test");
console.log(person1);//can be seen under prototypes in concole
console.log(person2);   