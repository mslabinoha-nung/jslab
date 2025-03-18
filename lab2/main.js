//Task 1.4
function calcTask4Value(x){
	return (Math.asin(2*x)+Math.abs(x))/(Math.pow(x,2)+1)
}
console.log("Task 4.1");
for(let x=0;x<=0.4;x+=0.2){
	z=calcTask4Value(x);
	console.log(z);
}
console.log("Task 4.2");
x=0.1;
for(let i=0;i<6;i++){
	z=calcTask4Value(x);
	x+=0.05;
	console.log(z);
}
//Task 1.5
function calcTask51Value(l){
	return Math.pow(-1,l)*(Math.pow(l,2)+1)/(l+2)
}
console.log("Task 5.1");
let S=0;
for(let l=3;l<=13;l++){
	S+=calcTask51Value(l);
}
console.log(S);
console.log("Task 5.2");
k=3;
let n=8;
let P=1;
function calcTask52Value(i){
	return (i-1)/(Math.pow(i,2)+5)
}
for(let i=k;i<=n;i++){
	P*=calcTask52Value(i);
}
console.log(P);
//Task 2
let C=[-3.6,-5.3,2.1,0.1,-0.7,5.3,6.6,-2.2];
let maxElem=C[0];
let maxIndex=0;
for(let i=1; i<C.length;i++){
	if(Math.abs(maxElem)<Math.abs(C[i])){
		maxElem=C[i];
		maxIndex=i;
	}
}
console.log('Max Element Index Is: '+maxIndex);
//Task 4
let scientists=[
	{
		name:"Marian Slabinoha",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		name:"Bohdan Pashkovskyi",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"IT",
		degree:"PhD"
	},
	{
		name:"Ihor Chudyk",
		organisation:"IFNTUOG",
		country:"Ukraine",
		field:"Oil and Gas Engineering",
		degree:"Dr.Sc."
	}
];
//Task 5
for (let i=0; i<scientists.length;i++){
	console.log(`${scientists[i].degree} ${scientists[i].name} - ${scientists[i].organisation} (${scientists[i].country}), ${scientists[i].field}`)
}