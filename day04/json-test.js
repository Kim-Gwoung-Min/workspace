let user = {id: "kgm", pw: "1234", name: "김광민"};
let userJSON = JSON.stringify(user);  //객체를 JSON으로 바꿈

// 자바 , 자바스크립트 -> 문자열 
// JSON으로 파싱, 자바에서 파싱 

console.log(userJSON);  // JSON은 키값에도 ""붙는다 

user = JSON.parse(userJSON);  
console.log(user);