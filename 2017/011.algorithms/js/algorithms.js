window.onload = function () {
	// 排序算法
	
	// example1--->自带sort排序(systemSort)
	(function(){
		document.getElementById('btn1').onclick = function () {
			var inputArr = getInputArray('input1');
			var outputArr = inputArr.sort(function (a,b) {
				return (a - b);
			});
			document.getElementById("output1").innerHTML = outputArr.join(",");
		}
	})();

	// example2--->冒泡排序(bubbleSort)
	(function(){
		document.getElementById('btn2').onclick = function () {
			var inputArr = getInputArray('input2');
			var tempNum;
			for (var i = 0, length = inputArr.length; i < length - 1; i++) {
				for (var j = 0, length2 = inputArr.length; j < length2 - 1 - i; j++) {
					if (inputArr[j] > inputArr[j+1]) {
						tempNum = inputArr[j];
						inputArr[j] = inputArr[j+1];
						inputArr[j+1] = tempNum;
					}
				}
			}
			document.getElementById("output2").innerHTML = inputArr.join(",");
		}
	})();

	// example3--->快速排序(quickSort)--原地排序
	(function(){
		document.getElementById('btn3').onclick = function () {
			var inputArr = getInputArray('input3');
			function quickSort(arr) {
				var quickSortSub = function (i,j) {
					if (i == j) {
						return;
					};
					var base = arr[i];
					var stepi = i;
					var stepj = j;
					while (j > i) {
						if(arr[j] >= base) {
							j--;
						} else {
							arr[i] = arr[j];
							while (++i < j) {
								if(arr[i] > base) {
									arr[j] = arr[i];
									break;
								}
							}
						}
					}

					// 如果首位最小，则从前一位开始排
					if (i == stepi) {
						quickSortSub(++stepi,stepj);
						return;
					}

					// 最后一个空位置留给base
					arr[i] = base;

					quickSortSub(stepi,i);
					quickSortSub(j,stepj);
				}

				quickSortSub(0,arr.length-1);

			}
			quickSort(inputArr);			

			document.getElementById("output3").innerHTML = inputArr.join(",");
		}
	})();	

	// example4--->快速排序2(quickSort)--生成左右两个数组进行分类
	(function(){
		document.getElementById('btn4').onclick = function () {
			var inputArr = getInputArray('input4');
			function quickSort2(arr) {
				if (arr.length <= 1) {
					return arr;
				}
				var base = arr.splice(0,1)[0];
				var left = [], right = [];
				for (var i = 0, length = arr.length; i < length; i++) {
					if (arr[i] > base) {
						right.push(arr[i]);
					} else {
						left.push(arr[i]);
					}
				}
				return quickSort2(left).concat([base], quickSort2(right));
			}
			var outputArr =  quickSort2(inputArr);
			document.getElementById("output4").innerHTML = outputArr.join(",");
		}
	})();

	// example5--->插入排序(insertSort)
	(function(){
		document.getElementById('btn5').onclick = function () {
			var inputArr = getInputArray('input5');
			var i, j, key;
			for (i = 1, length = inputArr.length; i < length; i++) {
				j = i;
				key = inputArr[j];
				while (--j > -1) {
					if (inputArr[j] > key) {
						inputArr[j+1] = inputArr[j];	
					} else {
						break;
					}
				}
				inputArr[j+1] = key;
			}
			
			document.getElementById("output5").innerHTML = inputArr.join(",");
		}
	})();

	// example6--->希尔排序(shellSort)
	(function(){
		document.getElementById('btn6').onclick = function () {
			var inputArr = getInputArray('input6');
			// var step = Math.floor(inputArr.length / 2);
			// var i, j, key;
			// for (; step > 0; step--) {
			// 	for (i = 1, )
			// }
			
			document.getElementById("output6").innerHTML = inputArr.join(",");
		}
	})();
	

	// 随机生成input输入框的数字
	(function(){
		var num = 10;
		var inputString = "";
		for (var i = 0; i < num; i++) {
			inputString += getRandomNum();
			if(i < num -1) {
				inputString += ",";
			}
		}
		var inputs = document.getElementsByTagName('input');
		for (var j = 0, length = inputs.length; j < length; j++) {
			inputs[j].value = inputString;
		}

		// 生成0-99的数字
		function getRandomNum() {
			return Math.floor(Math.random() * 100);
		}
	})();

	// 获取input输入框并生成数字组成的数组
	function getInputArray (id) {
		var stringArray = document.getElementById(id).value.split(",");
		var numArray = stringArray.map(function (item) {
			return item - 0;
		})
		return numArray;
	}
}