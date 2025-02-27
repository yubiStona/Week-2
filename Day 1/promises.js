const myPromise = new Promise((resolve, reject) => {
    let a=Number(prompt("Enter number to check"));
    let res=false;
    if(a%2==0){
        res=true;
    }
    if(res){
        resolve(`${a} is a even number`);
    }else{
        reject(`${a} is odd number`);
    }

});

myPromise.then((m)=>{
    console.log(m);
}).catch((m)=>{
    console.log(m);
});