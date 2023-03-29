// let account ={
//     owner :"김광민",
//     age : 20,
//     password: "1234",
//     account : "110-112-12312331",
//     address1: "서울시",
//     address2: "강남구"
// };
let account = new Object(); //프로토타입  --> let account ={}; 자바에선 생성자


//객체선언 {} 안에 key , value넣으면됌 
console.log(account);

account.age = 23;
console.log(account.age);

account.bank = "우리은행";
console.log(account);

console.log(account["password"]);


for(let i=1; i<3; i++){
    console.log(account[`address${i}`])
}

account["money"] = 10000;

account.deposit = function(money){
    this.money += money;
}

console.log(account.money);

account.deposit(30000);

console.log(account);
console.log(account.money);