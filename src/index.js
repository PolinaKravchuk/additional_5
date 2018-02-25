module.exports = function check(str, bracketsConfig) {
var mass = [], 
	pr = 1,
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
				
				for (var j = i; j < arr.length; j++){

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


		if (arr[i] == '|' && pr % 2 != 0) {
			//pozicia = i;
			pr++;
		}

}

if (arrSKobka.length == arr.length) 
	return true;
else return false;

}