function threeSum(arr, target) {
// write your code here
	// let flag = false;
	// for(let i = 0 ; i<arr.length; i++){
	// 	if(i===target){
	// 		targetindex =i;
	// 		break;
	// 	}
	// }
	// let sumvalue1 = arr[targetindex-1];
	// let sumvalue2 = arr[targetindex];
 //    let sumvalue3 = arr[targetindex+1];
	// let ans = (sumvalue1+sumvalue2+sumvalue3);
	// return ans;

	var diff = Number.MAX_VALUE;
        var ans = 0;

        for(let i = 0; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                for(let k = j + 1; k < arr.length; k++){
                    let sum = arr[i]  + arr[j] + arr[k];

                    if(Math.abs(sum - target) < diff){
                        diff = Math.abs(sum - target);
                        ans = sum;
                    }
                }
            }
        }
        return ans;
    }

module.exports = threeSum;
