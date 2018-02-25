module.exports = function check(str, bracketsConfig) {
var mass = [], 
	pr = 1,
	sem = 1,
	vosem = 1,
	pozicia;

var arr =  str.split('');
	

for (var i = 0; i < bracketsConfig.length; i++){
  	var row = bracketsConfig[i];
  	for (var j = 0; j < row.length; j++){
  		var column = row[j];
  		mass.push(column);
  	}
}
  
var arrSKobka= [];
for (var i = arr.length - 1; i >= 0; i--){

		if (arr[i] == '(') {
			if (mass.indexOf(arr[i]) != -1){

				for (var j = i; j < arr.length; j++){

					if (arr[j] == ']' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '}' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '|' && arrSKobka.indexOf(j) == -1) return false;

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

					if (arr[j] == '|' && arrSKobka.indexOf(j) == -1) return false;

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

					if (arr[j] == ']' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == ')' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '|' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '}' && mass.indexOf(arr[j]) != -1 && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		}

		if (arr[i] == '|' && pr % 2 == 0) {
			if (mass.indexOf(arr[i]) != -1){
				pr++;
				for (var j = i + 1; j < arr.length; j++){

					if (arr[j] == ']' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == ')' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '}' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '|' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		}


		if (arr[i] == '|' && pr % 2 != 0 && arrSKobka.indexOf(i) == -1) {
			if (mass.indexOf(arr[i]) != -1)
				pr++;
			else return false;
		}

		if(arr[i] == '1'){
			if (mass.indexOf(arr[i]) != -1){
				for (var j = i + 1; j < arr.length; j++){
					if (arr[j] == '4' && arrSKobka.indexOf(j) == -1) return false;
						
					if (arr[j] == '6' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '7' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '8' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '2' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			}else return false;
		}

		if(arr[i] == '3'){
			if (mass.indexOf(arr[i]) != -1){
				for (var j = i + 1; j < arr.length; j++){
					if (arr[j] == '2' && arrSKobka.indexOf(j) == -1) return false;
						
					if (arr[j] == '6' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '7' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '8' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '4' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			}else return false;
		}

		if(arr[i] == '5'){
			if (mass.indexOf(arr[i]) != -1){
				for (var j = i + 1; j < arr.length; j++){
					if (arr[j] == '4' && arrSKobka.indexOf(j) == -1) return false;
						
					if (arr[j] == '2' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '7' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '8' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '6' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			}else return false;
		}

		if (arr[i] == '7' && sem % 2 == 0) {
			if (mass.indexOf(arr[i]) != -1){
				sem++;
				for (var j = i + 1; j < arr.length; j++){

					if (arr[j] == '2' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '4' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '6' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '8' && arrSKobka.indexOf(j) == -1 && vosem % 2 != 0) return false;

					if (arr[j] == '7' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		}

		if(arr[i] == '7' && sem % 2 != 0 && arrSKobka.indexOf(i) == -1){
			if (mass.indexOf(arr[i]) != -1)
				sem++;
			else return false;
		}

		if (arr[i] == '8' && vosem % 2 == 0) {
			if (mass.indexOf(arr[i]) != -1){
				vosem++;
				for (var j = i + 1; j < arr.length; j++){

					if (arr[j] == '2' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '4' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '6' && arrSKobka.indexOf(j) == -1) return false;

					if (arr[j] == '7' && arrSKobka.indexOf(j) == -1 && sem % 2 != 0) return false;

					if (arr[j] == '8' && arrSKobka.indexOf(j) == -1) {
						arrSKobka.push(i);
						arrSKobka.push(j);
						break;
					}
				}
			} else return false;
		}

		if(arr[i] == '8' && vosem % 2 != 0 && arrSKobka.indexOf(i) == -1){
			if (mass.indexOf(arr[i]) != -1)
				vosem++;
			else return false;
		}

}

if (arrSKobka.length == arr.length) 
	return true;
else return false;

}