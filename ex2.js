var args = process.argv;
var len = args.length;
var nums = args.slice(2,len);
var sum = 0;

for(var i=0;i<nums.length;i++){
  sum += Number(nums[i]);
}

console.log(sum);
