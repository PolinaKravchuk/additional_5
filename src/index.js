module.exports = 
function check(str, bracketsConfig) {
	var mass = [], 
		opCircul = 0,
		clCircul = 0,
		opCirculArr = 0,
		clCirculArr = 0;

	var arr =  str.split('');
	/*console.log('arr ');
	console.log(arr);*/

  for (var i = 0; i < bracketsConfig.length; i++){
  	var row = bracketsConfig[i];
  	for (var j = 0; j < row.length; j++){
  		var column = row[j];
  		mass.push(column);
  	}
  }
  /*console.log('mass ');
  console.log(mass);*/
	/*for (var i = 0; i < mass.length; i++){
		if (mass[i] == '(')
			opCircul ++;
		if (mass[i] == ')')
			clCircul ++;
	}*/
var arrSKobka= [];
for (var i = arr.length - 1; i >= 0; i--){

		if (arr[i] == '(') {
			if (mass.indexOf(arr[i]) != -1){

				for (var j = i; j < arr.length; j++){

					if (arr[j] == ']' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '}' && arrSKobka.indexOf(j) == -1) return false;

					/*if (arr[i] == '{') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){
								if (arr[j] == ']' ) return false;

								if (arr[j] == ')' ) return false;

								if (arr[j] == '}' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
							}
						} else return false;
					}

					if (arr[i] == '[') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){
								if (arr[j] == ']' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
								if (arr[j] == ')' ) return false;

								if (arr[j] == '}' ) return false;
							}
						} else return false;
					}*/

					if (arr[j] == ')' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		} 

		if (arr[i] == '[') {
			if (mass.indexOf(arr[i]) != -1){
				for (var j = i; j < arr.length; j++){

					if (arr[j] == ')' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '}' && arrSKobka.indexOf(j) == -1) return false;

					/*if (arr[i] == '(') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){

								if (arr[j] == ')' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
								if (arr[j] == ']' ) return false;

								if (arr[j] == '}' ) return false;
							}
						} else return false;
					}

					if (arr[i] == '{') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){
								if (arr[j] == ']' ) return false;

								if (arr[j] == ')' ) return false;

								if (arr[j] == '}' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
							}
						} else return false;
					}*/

					if (arr[j] == ']' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		} 
		if (arr[i] == '{') {
			if (mass.indexOf(arr[i]) != -1){
				for (var j = i; j < arr.length; j++){

					if (arr[j] == ']' ) return false;

					if (arr[j] == ')' ) return false;

					/*if (arr[i] == '(') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){

								if (arr[j] == ')' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
								if (arr[j] == ']' ) return false;

								if (arr[j] == '}' ) return false;
							}
						} else return false;
					}

					if (arr[i] == '[') {
						if (mass.indexOf(arr[i]) != -1){
							for (var j = i; j < arr.length; j++){
								if (arr[j] == ']' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
									arrSKobka.push(i);
									arrSKobka.push(j);
									break;
								}
								if (arr[j] == ')' ) return false;

								if (arr[j] == '}' ) return false;
							}
						} else return false;
					}*/

					if (arr[j] == '}' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		}

}

	if (arrSKobka.length == arr.length) 
		return true;
	else return false;
	/*var k = 0;
	if (arr.length % 2 == 0 && opCirculArr == clCirculArr) {
		for (var i = 0; i < arr.length; i++){
			var t = arr[i];
			if (t == '(') {
				for (var j = i; j < arr.length; j++){
					if (arr[j] == ')') {
						k++;
						break;
					}
				}
				if (k == 1)
				
			}
			
		}
	}  else console.log('return false');*/


  
}