// // const obj = {
// //   0 : 'a',
// //   1 : 'b'
// // }

// // obj.__proto__[Symbol.iterator] = function *(){
// //   for(let i = 0; i<Object.keys(obj).length;i++){
// //     yield obj[i]
// //   }
// // }
// // console.log([...obj])

const ary =[]
async function ary1(len){
  for(let i =0;i<len;i++){
    await Math.random()
  }
}
// Promise.resolve().then 


// // console.log([...ary1(6)])
// const c = Symbol('c')
// obj = {
//   a : 'a',
//   b: 'b',
// }
// obj[c] = 3
// // console.log(Object.getOwnPropertyDescriptor(obj,'0'))
// // Object.defineProperty(obj,'a',{
// //   enumerable:false
// // })
// // obj.a=8
// console.log(Object.getOwnPropertySymbols(obj))


const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

class myPromise{
  constructor(fn){
    this.state = PENDING
    this.value = null
    this.resolveCB = []
    this.rejectCB = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    fn(this.resolve,this.reject)
  }
  resolve(value){
    if(this.state == PENDING){
      this.state = RESOLVED
      this.resolveCB(value)
    }
  }
  reject(value){
    if(this.state == PENDING){
      this.state = REJECTED
      this.rejectCB(value)
    }
  }
  then(resolveCB,rejectCB){
    this.resolveCB.push(resolveCB)
    this.rejectCB = rejectCB
  }
}

let a = 0;
new myPromise((resolve,reject)=>{
  if(Math.random()>0.5){
    setTimeout(() => {
      resolve(a+1)
    }, 1000);
  }else{
    setTimeout(() => {
      reject(a+1)
    }, 1000);
  }
}).then((res)=>{
  console.log("resolve",res)
},(res)=>{
  console.log("reject",res)
})