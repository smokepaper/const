// var val1 = "varvar";
// console.log(val1);

// val1 = "var rename";
// console.log(val1);

// var val1 = "var rename2";
// console.log(val1);

// let val2='let_hensu'
// console.log(val2)

// val2='let_hensu_rename';
// console.log(val2);

// let val2='let_hensu_rerename'
//letは再宣言不可能
//constは再宣言も上書きも不可能

// const val3 = {
//   name: 'dano',
//   age: 23
// };
// val3.name='jyp';
// console.log(val3);
// //objの中身は変更可能
// val3.address='hiroshima';
// console.log(val3);

//constで定義したObjはプロパティの変更が可能

// const val4=['dog','cat'];
// val4[0]='bird';
// console.log(val4);
// val4.push('monkey');
// console.log(val4);

/*
template
*/

// const name = "dano";
// const age = "23";
// //my name is dano,23 years old
// const message1 = "my name is " + name + ", " + age + "years old";
// console.log(message1);
// //tenplate
// const message2 = `my name is ${name}, ${age}years old`;
// console.log(message2);

/*arrow*/

/*standard*/
// function func1(str) {
//   return str;
// }
// console.log(func1("f*ck1"));

// /*arrow*/
// const func2 = (str) => str; //処理が一行で終わってそれを返すものはreturnを省略可能
// console.log(func2("f*ck2"));

// const func3=(num1,num2)=>{
//   return num1+num2;
// };
// console.log(func3(1888,19999));

// const myProfile = {
//   name: "dano",
//   age: 23
// };
// const message1 = `my name is ${myProfile.name},${myProfile.age} years old`;
// console.log(message1);

// const {name,age }=myProfile; //分割代入

// const message2 = `my name is ${name},${age} years old`;
// console.log(message2);

//配列の場合の分割代入は順番に注意
// const myProfile = ["dano", 23];
// const message3 = `my name is ${myProfile[0]},${myProfile[1]} years old`;
// console.log(message3);

// const [name,age]=myProfile;
// const message4 = `my name is ${name},${age} years old`;
// console.log(message4);

/*default,argument(引数)*/
// const sayHelllo = (name='unknown') => console.log(`Hello ${name}!`);
// sayHelllo('dano');

/*spread construction(スプレッド構文) 「...」*/
//配列の展開
// const arr1=[1,2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc=(num1,num2)=>console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
//スプレッド構文は順番に処理する

//まとめる
// const arr2=[1,2,3,4,5];
// const [num1,...arr3]=arr2;
// console.log(num1);
// console.log(arr3);

//配列のコピー
// const arr4=[10,20];
// const arr5=[30,40];

// const arr6=[...arr4];
// console.log(arr6);
// arr6[0]=10000;
// console.log(arr6);
// console.log(arr4);

// const arr7=[...arr4,...arr5];
// console.log(arr7);

/*map,filter*/
const nameArr = ["john", "james", "dano"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1} is ${nameArr[index]}`);
// }

// // const nameArr2=nameArr.map((name)=>{
// //   return name;
// // });
// // console.log(nameArr2);
// nameArr.map((pepe,pipi) => console.log(`${pipi+1} is ${pepe}`)); //配列を順次ループしていく処理をfor文使わずに可能

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr =nameArr.map((name)=>{
//   if (name==='dano'){
//     return name
//   }else{
//     return `${name}san`
//   }
// });
// console.log(newNameArr)

/*三項演算子　*/
//ある条件？条件がtrueの時:条件がfalseの時
// const val1 = 1 < 0 ? "true!" : "false";
// console.log(val1);

// const num=1300;
// console.log(num.toLocaleString());

// const formattedNum=typeof num==='number'?num.toLocaleString():'you should input number';
// console.log(formattedNum);

// const checkSum=(num1,num2)=>{
//   return num1+num2>100?'over 100!':'okok'
// };
// console.log(checkSum(300,900));
// console.log(checkSum(3,9));

/** 論理演算子の本当の意味を知ろう*/
// const flag1=true;
// const flag2=false;

// if(flag1||flag2){
//   console.log('1or2 is true');
// };
// if(flag1&&flag2){
//   console.log('1and2 is true');
// };

// ||は左側がfalseの時に右を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "something";
console.log(fee2);
