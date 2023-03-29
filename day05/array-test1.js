// 값에 || 연산자를 사용하면 false 값일 경우 뒤에 있는 값으로 대체 된다.
// let data = "";
// let result = data | 1;   //페이징 처리 
// console.log(result);

// let datas = [];
// datas[0] = 10;
// datas[4] = 20;
// console.log(datas);

// push(): 가장 마지막에 값 추가 
// let datas = [20,3,5,7,1];
// datas.push(21);
// console.log(datas);

// join() : 원하는 구분점을 문자열로 전달하여 각 요소를 구분한 뒤 문자열로 리턴
// console.log(datas.join(":"));  // : 시분초 ,  / 파일 구분 디렉토리 할때

//slice(begin, end): 원하는 부분을 추출하시 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달 
// slice(begin) : begin부터 마지막 인덱스까지 추출
// console.log(datas.slice(0,3));
// console.log(datas.slice(3,4));

// indexOf(value): 값을 해당 Array에서 조회 후 인덱스 번호 리턴, 조회 실패 시 -1 리턴 
// console.log("ABC".indexOf("A"));
// console.log(datas.indexOf(21));

// split("구분점")
// console.log("월화수목금토일".split("").push("요일"));
// console.log("월화수목금토일".split(""));
// let weekOfDay = "월화수목금토일".split("");
// weekOfDay.push("일");
// console.log(weekOfDay);

// forEach(callback) : 반복문 
// datas.forEach(function(data){console.log(data);});
// datas.forEach(data => console.log(data));
// datas.forEach(function(data, i, datas){console.log(data, i,datas)});
// datas.forEach((data, i, datas) => { console.log(data, i, datas)});

// 기존 값을 제곱으로 변경, Math.pow(값, 지수)
// datas.forEach(function(data, i, datas){
//     datas[i] = Math.pow(data, 2);
// });
// console.log(datas);

// datas.forEach((data, i, datas) => datas[i] = Math.pow(data,2));
// console.log(datas);

// map (callback) : 변경
let numbers = new Array(5).fill(0);
console.log(numbers)

// let numbers.map(function(number) { return number + 3}).forEach(function(number){console.log(number)});

//기존 객체를 함수로 받아온다음 .map으로 (특정하나)nickname만 가져올때 사용 , 

// 위의 식을 Arrow Expression으로 변경하기 
// numbers.map((number => number+3)).forEach((number => console.log(number)));

// numbers.map(number => number+3).forEach(number => console.log(number));

//filter(callback) : 리턴 값이 true일 경우 수집

numbers.forEach((number, i, numbers) => numbers[i] = i+1);
numbers.filter(function(number){return number % 2 ==0;}).forEach(function(number){console.log(number);});

numbers.filter((number => number % 2 ==0)).forEach(number => console.log(number));

