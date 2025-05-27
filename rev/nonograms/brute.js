function generateGrayCode(n) {
	let grayCodes = [];
	for (let i = 0; i < (1 << n); i++) {
		grayCodes.push(i ^ (i >> 1));
	}
	return grayCodes;
}
let grayCode25 = generateGrayCode(25);

const sleep = ms => new Promise(r => setTimeout(r, ms));
console.log('generated gray code');

const canvas = document.getElementById("canvas");
const rect = canvas.getBoundingClientRect();
const cellSize = 21;
const y = rect.top + 1;

let prev = 0;
let j = 0;

let a = () => {
	if (j >= grayCode25.length) {
		return;
	}
	const code = grayCode25[j] + 1;
	const currentCol = Math.floor(Math.log2(code ^ prev));
	prev = code;
	const x = currentCol * cellSize + rect.left + 1;
	const clickEvent = new MouseEvent("click", {
		clientX: x,
		clientY: y,
		bubbles: true,
		cancelable: true,
		view: window
	});
	canvas.dispatchEvent(clickEvent);

	setTimeout(() => {
		j++;
		a();
	}, 20);
}

