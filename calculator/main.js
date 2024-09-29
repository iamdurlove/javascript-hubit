// // to verify the input
// const isValidExpression = (expr) => {
// 	try {
// 		// Check if the expression is valid by evaluating it in a safe manner
// 		// Using Function constructor to avoid eval security issues
// 		new Function(`return ${expr}`);
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// };

// const calculate = () => {
// 	const value = document.getElementById("textview").value;
// 	if (value) {
// 		if (!isValidExpression(value)) {
// 			alert("Invalid expression");
// 			return;
// 		}
// 		document.getElementById("textview").value = eval("value");
// 	}
// };

function insert(exp) {
	const display = document.getElementById("textview");
	display.value = display.value + exp;
	// display.value += exp;
}

function clearAll() {
	const display = document.getElementById("textview");
	display.value = "";
}

function calculate() {
	const display = document.getElementById("textview");
	if (display.value === "") {
		alert("Enter an expression");
	} else if (!isValidExpression(display.value)) {
		alert("Invalid expression");
	} else {
		display.value = eval(display.value);
	}
}

const clearOne = () => {
	const value = document.getElementById("textview").value;
	document.getElementById("textview").value = value.substring(
		0,
		value.length - 1
	);
};

// to verify the input
const isValidExpression = (expr) => {
	try {
		// Check if the expression is valid by evaluating it in a safe manner
		// Using Function constructor to avoid eval security issues
		new Function(`return ${expr}`);
		return true;
	} catch (e) {
		return false;
	}
};
