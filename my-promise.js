// new Promise((resolve,reject)=>{
//   let count = 0;
//   if(Math.random()>0.5){
//     setTimeout(() => {
//       resolve(count+1)
//     }, 1000);
//   }else{
//     setTimeout(() => {
//       reject(count-1)
//     }, 1000);
//   }
// }).then((res)=>console.log("resolve",res),(res)=>console.log("reject",res))

// function promise1() {
//   let count = 0;
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => {
//         resolve(count + 1);
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         reject(count - 1);
//       }, 1000);
//     }
//   });
// }
// function promise2(count) {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => {
//         resolve(count + 1);
//       }, 1000);
//     } else {
//       setTimeout(() => {
//         reject(count - 1);
//       }, 1000);
//     }
//   });
// }

// promise1()
//   .then(res => promise2(res))
//   .then(res => console.log("resolve", res))
//   .catch(res => console.log("catch", res));

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"
class myPromise{
  constructor(fn){
    this.state = PENDING
    this.value = null
    this.resolveCB = null
    this.rejectCBs = null
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    fn(this.resolve,this.reject)
  }
  resolve(value){
    if(this.state == PENDING){
      this.state = RESOLVED
      this.value = value
      this.resolveCB(this.value)
    }
  }
  reject(value){
    if(this.state == PENDING){
      this.state = REJECTED
      this.value = value
      this.rejectCBs(this.value)
    }
  }
  then(resolveCB,rejectCB){
    this.resolveCB = resolveCB
    this.rejectCBs = rejectCB
  }
}

new myPromise((resolve,reject)=>{
  let count = 0;
  if(Math.random()>0.5){
    setTimeout(() => {
      resolve(count+1)
    }, 1000);
  }else{
    setTimeout(() => {
      reject(count-1)
    }, 1000);
  }
}).then((res)=>console.log("resolve",res),(res)=>console.log("reject",res))
