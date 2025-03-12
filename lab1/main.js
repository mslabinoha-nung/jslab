//Task 1
console.log("Task 1");
let a=-4;
let y=1;
let result=((a!=y)&&(y<Math.abs(2*a)))
console.log(result);
//Task 2
console.log("Task 2");
let k=2.26;
y=Math.sqrt(Math.abs(Math.PI-Math.exp(1)));
let x=Math.exp(k*y-5.1)+Math.pow(Math.cos(k*y),2);
let z=Math.log10(Math.abs(x+1))-Math.pow(Math.log(Math.abs(Math.pow(2,x)-1)),3);
console.log("Result is: "+z);
//Task 3
console.log("Task 3");
x=1;
y=null;
if(Math.abs(x)<1){
	y=124-Math.exp(x);
} else if(x>1&&x<10){
	y=Math.tan(x-1);
} else if(x<=-1||x>=10){
	y=1;
}
if (y===null){
	console.log('Wrong input');
} else{
	console.log(y);
}
//Task 4
console.log("Task 4.1");
for(let x=0;x<=0.4;x+=0.2){
	z=(Math.asin(2*x)+Math.abs(x))/(Math.pow(x,2)+1)
	console.log(z);
}
console.log("Task 4.2");
x=0.1;
for(let i=0;i<6;i++){
	z=(Math.asin(2*x)+Math.abs(x))/(Math.pow(x,2)+1)
	x+=0.05;
	console.log(z);
}
//Task 5
console.log("Task 5.1");
let S=0;
for(let l=3;l<=13;l++){
	S+=Math.pow(-1,l)*(Math.pow(l,2)+1)/(l+2)
}
console.log(S);
console.log("Task 5.2");
k=3;
let n=8;
let P=1;
for(let i=k;i<=n;i++){
	P*=(i-1)/(Math.pow(i,2)+5)
}
console.log(P);