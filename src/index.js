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

const name = "dano";
const age = "23";
//my name is dano,23 years old
const message1 = "my name is " + name + ", " + age + "years old";
console.log(message1);
//tenplate
const message2 = `my name is ${name}, ${age}years old`;
console.log(message2);
