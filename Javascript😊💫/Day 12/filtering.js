const arr =[1,4,5,35];

// arr.compare=(number)=>number>25;
// console.log(arr.compare(20));
Array.prototype.filtering=function(compare){
  const ans=[];
  for(let num of this){
    if(compare(num)){
      ans.push(num);
}
}
return ans;
}
const newpro=arr.filtering((number)=>number>9);
console.log(newpro);


const a =[1,44,54,4,48,55,23];
const answer=a.filtering((number)=>number>9);
console.log(answer);
