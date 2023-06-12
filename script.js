function threeSum(arr, target) {
// write your code here
	let flag = false;
	for(let i = 0 ; i<arr.length; i++){
		if(i===target){
			targetindex =i;
			if flag = true;
			break;
		}
	}
	if(flag === true){
	let sumvalue1 = arr[targetindex-1];
	let sumvalue2 = arr[targetindex];
    let sumvalue3 = arr[targetindex+1];
	let ans = (sumvalue1+sumvalue2+sumvalue3);
	return ans;
	}
	let sum = arr[0]+arr[1]+arr[2];
	return sum;
}

module.exports = threeSum;
