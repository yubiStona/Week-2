class vehicle{
    constructor(name,color,type){
        this.name=name;
        this.color=color;
        this.type=type;
    }

    getDetails(){
        return `the vehicle ${this.name} has ${this.color} color and is ${this.type}`;
    }
    start(){
        console.log(`${this.name} engine started!`);
    }
    
    stop(){
        console.log(`${this.name} engine stopped!`)
    }
}

let obj= new vehicle("car","red","4 wheeler");
console.log(obj.getDetails());
obj.start();
obj.stop();

class bike extends vehicle{ //inheritance-one class access propeties of another class
    constructor(name,color,type,model){
        super();
        this.model=model;
        this.name=name;
        this.color=color;
        this.type=type;
    }
    models(){
        console.log(`the model of this bike is ${this.model}`);
    }

     stop(){  //polymorphism-the stop function on parent class is overriden
        console.log("bike engine stopped");
     }

}

let obj2= new bike("hero xtreme","red","2 wheeler","xtreme");
obj2.start();
obj2.stop();// execute the stop function on the bike class
obj2.models();