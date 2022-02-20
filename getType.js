//default = 기본으로 보내겠다.
export default function getType(data){
  return Object.prototype.toString.call(data).slice(8, -1)
}