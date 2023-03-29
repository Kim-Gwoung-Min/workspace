// 상품명과 가격을 JSON으로 만든다.
// 위 JSON을 JS Object 객체로 변환한다.
// 각 프로퍼티를 출력한 뒤 다시 JSON으로 변환한다.

// // let product = new Object();
// let product = {
//     productname : "지우개",
//     price : 1000
// };
// console.log(product);
// productJSON = JSON.stringify(product);  //객체를 JSON으로; 
// console.log(productJSON);

// // js Object로 변환 
// product = JSON.parse(productJSON);
// console.log(product);

// productJSON = JSON.stringify(product);
// console.log(productJSON);

let productJSON = `{"name" : "감자", "price": "900" }`;
console.log(productJSON);
console.log("----------")
let product = JSON.parse(productJSON);
console.log(product);
console.log("-----jsObject-----")
productJSON = JSON.stringify(product);
console.log(productJSON);
console.log("-----다시 JSON-----")