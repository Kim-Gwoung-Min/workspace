//typescript 설치 명령어 
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// 오류 발생 시 :  Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init
// JS는 오버로딩을 지원하지 않는다.
// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);
var result = 10;
//타입스크립트를 노드로 바꿔서 Js실행
// 가변인자
intro("김광민", "남자", "20살", "울산");
function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("\uC774\uB984: ".concat(name));
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
// function add(...numbers){
//     let result = 0;
//     for(let i=0; i<numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }
// let result = add(1, 2, 3);
// let result = add(1, 2);
// console.log(result);
// function add(number1, number2){
//     return number1 + number2;
// }
// function add(number1, number2, number3 = 0){
//     return number1 + number2 + number3;
// }
