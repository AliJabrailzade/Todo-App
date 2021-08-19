const tasks = document.querySelector('#tasks');
const form = document.querySelector('#form');
const task = document.querySelector('#task');
const item = document.querySelector('.item');


form.onsubmit = () => {

	const li = document.createElement('li');
	const p = document.createElement('p');
	const div = document.createElement('div');
	const buttonX = document.createElement('button');
	const buttonR = document.createElement('button');

	li.className = "flex card item";
	buttonX.className = 'x button';
	buttonR.className = 'r button';

	buttonX.innerHTML = "X";
	buttonR.innerHTML = "R";

	p.append(task.value);
	div.append(buttonX);
	div.append(buttonR);
	
	li.append(p);
	li.append(div);

	tasks.append(li);

	task.value = "";
	return false;

} 