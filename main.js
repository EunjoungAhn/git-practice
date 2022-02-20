// 모듈안에 lodash 라는 패키지를 불러와서 lodash.js를 파일을 
//불러서 가져오는 것이다.
import _ from 'lodash';

// ./ 경로를 안적으면 모듈에서 찾게 된다. 
import getType from './getType';

console.log('hello world');
//불러온 lodash.js파일로 함수를 사용할 수 있다.
console.log(_.camelCase('hello world'));
console.log(getType(123))

//생성자 함수 이며, 함수명은 시작을 파스칼 케이스로 작성한다.
//자바스크립트에서는 파스탈은 생성자 함수이다.
// function  User(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// user.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }

// const newTest = new user('test', 'js')
// const newTest2 = new user('test2', 'js')
// const newTest3 = new user('test3', 'js')
// console.log(newTest.getFullName())
// console.log(newTest2.getFullName())
// console.log(newTest3.getFullName())

//하나의 객체를 만드는 방식 = 리터럴 방식
//const newTest2 = {}

//Es6의 새로운 클라스 문법
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  //prototype으로 접근 안해도 선언이 가능하다.
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

