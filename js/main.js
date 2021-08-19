const tasks = document.querySelector('#tasks');
const form = document.querySelector('#form');
const task = document.querySelector('#task');
const item = document.querySelector('.item');
const deleteAll = document.querySelector('.delete-all');


let noTaskLi = document.createElement('li');

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

	buttonX.onclick = () => {
		buttonX.parentElement.parentElement.remove();
	}

	buttonR.onclick = () => {
		console.log(buttonR.parentElement.previousElementSibling);

		const previousElement = buttonR.parentElement.previousElementSibling;
		console.log(buttonR.previousElementSibling)
		const replaceForm = document.createElement('form');
		const input = document.createElement('input');
		const buttonCancel = document.createElement('button');
		const buttonChange = document.createElement('button');

		buttonCancel.className = "button"
		buttonChange.className = "button"

		buttonCancel.innerHTML = 'Cancel';
		buttonChange.innerHTML = 'Change'

		buttonChange.onclick = () => console.log('change')  
		buttonCancel.onclick = () => console.log('cancel')

		// buttonChange.onclick = () => {
		// 	console.log('change')
		// }

		// buttonCancel.onclick = () => console.log('cancel')


		// buttonR.previousElementSibling.replaceWith(buttonChange);


		input.setAttribute('type', 'text');

		replaceForm.append(input);
		buttonR.parentElement.previousElementSibling.replaceWith(replaceForm);

		buttonR.previousElementSibling.replaceWith(buttonChange);
		buttonR.replaceWith(buttonCancel);

		replaceForm.onsubmit = () => {

			return false;
		}

		// console.log(buttonR.parentElement.previousElementSibling);
		// console.log(previousElement);


	}

	p.append(task.value);
	div.append(buttonX);
	div.append(buttonR);
	
	li.append(p);
	li.append(div);

	tasks.append(li);

	deleteAll.onclick = deleteAllTasks;
	task.value = "";
	return false;

} 

setInterval(noTask, 100);

function noTask() {
	// console.log('okay')
	// console.log('length: ' + tasks.children.length)
	if (tasks.children.length === 0) {
		noTaskLi.innerHTML = 'No Task';
		tasks.append(noTaskLi);
	} else if (tasks.children.length > 1) {
		// noTaskLi.style.display = 'none';
		noTaskLi.remove()
	}
	
}


function deleteAllTasks() {
	// console.log(deleteAll);
	console.log('length: ' + tasks.children.length);
	for (let task = tasks.children.length - 1; task > -1; task--) {
		console.log(task);
		tasks.children[task].remove();
	}
}
