//your JS code here. If required.
function non(input) {
	let n=input.length;
	let map=new Map();
	for (let i=0;i<n;i++){
		if (map.get(input[i])){
			map.set(input[i],map.get(input[i])+1)
		}else{
			map.set(input[i],1)
		}
	}
	let ans='';
	for (let i of input){
		if (map.get(i)===1){
			return i;
		}
	}
	return null;
}
function main() {
	let input=prompt("Enter a string"); 
   
	let fun=non(input)
	alert(fun);
	
}   
main();