function threeSum(arr, target) {
// write your code here
	let flag = false;
	for(let i = 0 ; i<arr.length; i++){
		if(i===target){
			targetindex =i;
			break;
		}
	}
	let sumvalue1 = arr[targetindex-1];
	let sumvalue2 = arr[targetindex];
    let sumvalue3 = arr[targetindex+1];
	let ans = (sumvalue1+sumvalue2+sumvalue3);
	return ans;
	
}

module.exports = threeSum;
