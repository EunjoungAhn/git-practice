// 모듈안에 lodash 라는 패키지를 불러와서 lodash.js를 파일을 
//불러서 가져오는 것이다.
import _ from 'lodash';

console.log('hello world');
//불러온 lodash.js파일로 함수를 사용할 수 있다.
console.log(_.camelCase('hello world'));