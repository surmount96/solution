let n = [1,2,3,4,5,6,7];
let m = 19;
let s = 2;
const warnTheDeveoper = (n,m,s) => {
  let reset = s-1;
  let seatPostion = 0;

  for(let i=0; i <= m; i++) {
    if(reset === n.length) reset = 0;
    seatPostion = reset;
    reset++;
  }
  console.log('=======================');
  console.log(seatPostion,'seat position');
  console.log('=======================');
}

warnTheDeveoper(n,m,s);