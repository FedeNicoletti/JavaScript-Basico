let a = 0;
let b = 1;
let c = 0;
let num = 6;
var fibb = [0, 1];

for(let i = 0; i < num-1; i++)
{
   c = a + b
   fibb.push(c);
   a = b ;
   b = c;
}

console.log(fibb);