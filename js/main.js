const tasks = document.querySelector('#tasks');
const form = document.querySelector('#form');
const task = document.querySelector('#task');
const item = document.querySelector('.item');
const submit = document.querySelector('#submit');
const deleteAll = document.querySelector('.delete-all');
const archive = document.querySelector('#archive');


let noTaskLi = document.createElement('li');
let noArchiveLi = document.createElement('li');

submit.disabled = true;

task.onkeyup = () => {
	if (task.value.length > 0) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
}

form.onsubmit = () => {

  // const allChanges = [];
	const li = document.createElement('li');
	const p = document.createElement('p');
	const div = document.createElement('div');
	const buttonD = document.createElement('button');
  const unDone = document.createElement('button');

	const buttonX = document.createElement('button');
	const buttonR = document.createElement('button');
	const buttonA = document.createElement('button');
  const history = document.createElement('select');
  const opt = document.createElement('option');

	li.className = "flex card item";

	buttonD.className = 'd button';
  unDone.className = "undone button";
	buttonX.className = 'x button';
	buttonR.className = 'r button';
	buttonA.className = 'a button';
  history.className = 'h button';

	buttonD.innerHTML = " D ";
  unDone.innerHTML = "unDone";
	buttonX.innerHTML = " X ";
	buttonR.innerHTML = " R ";
	buttonA.innerHTML = " A ";

	buttonD.onclick = () => {
		const previousElement = buttonR.parentElement.previousElementSibling.textContent;
		const s = document.createElement('s');
		const pTag = document.createElement('p');
    // unDone.style.display = "inline";
    s.className = "s";

    pTag.innerHTML = previousElement;

		unDone.onclick = () => {
			unDone.parentElement.previousElementSibling.replaceWith(pTag);
			unDone.replaceWith(buttonD);
		}


		s.append(previousElement);
		buttonD.parentElement.previousElementSibling.replaceWith(s);
		buttonD.replaceWith(unDone);
		
	}

	buttonX.onclick = () => {
		buttonX.parentElement.parentElement.remove();
	}

	buttonR.onclick = () => {

		buttonD.style.display = "none";
		buttonA.style.display = "none";
    unDone.style.display = "none";
    history.style.display = "none";

		const previousElement = buttonR.parentElement.previousElementSibling;
		const replaceForm = document.createElement('form');
		const input = document.createElement('input');
		const buttonCancel = document.createElement('button');
		const buttonChange = document.createElement('button');

    input.id = "input";
    // const label = document.createElement('label');
    // label.id

		buttonCancel.className = "button";
		buttonChange.className = "button";

		buttonCancel.innerHTML = 'Cancel';
		buttonChange.innerHTML = 'Change';


		buttonChange.onclick = () => {
      const addOption = document.createElement('option');
			const p = document.createElement('p');
			p.append(input.value);
      // allChanges.push(input.value);
			replaceForm.replaceWith(p);
			buttonCancel.replaceWith(buttonR);
			buttonChange.replaceWith(buttonX);

      console.log(input.value);
      addOption.value = input.value;
      addOption.innerHTML = input.value;
      console.log(addOption);
      history.append(addOption);

			// make these buttons visable again
      buttonD.style.display = "inline";
			buttonA.style.display = "inline";
      unDone.style.display = "inline";
			unDone.replaceWith(buttonD);
      history.style.display = "inline";
      // unDone.remove()

		}

		buttonCancel.onclick = () => {
			replaceForm.replaceWith(previousElement);
			buttonCancel.replaceWith(buttonR);
			buttonChange.replaceWith(buttonX);

			// make these buttons visable again
			buttonD.style.display = "inline";
			buttonA.style.display = "inline";
      unDone.style.display = "inline";
      history.style.display = "inline";
		}

		input.setAttribute('type', 'text');


		replaceForm.append(input);
		buttonR.parentElement.previousElementSibling.replaceWith(replaceForm);

		buttonR.previousElementSibling.replaceWith(buttonChange);
		buttonR.replaceWith(buttonCancel);

		replaceForm.onsubmit = () => {

			return false;
		}

	}

	buttonA.onclick = () => {
		archive.append(buttonA.parentElement.parentElement);
    const unArchive = document.createElement('button');
    unArchive.className = 'un-archive button'
    unArchive.innerHTML = 'UnArchive';
    buttonA.replaceWith(unArchive);

    unArchive.onclick = () => {
      tasks.append(unArchive.parentElement.parentElement);
      unArchive.replaceWith(buttonA)
    }
	}

  history.onchange = () => {
    history.parentElement.previousElementSibling.innerHTML = history.value;
  }

	p.append(task.value);
	div.append(buttonD);
	div.append(buttonX);
	div.append(buttonR);
	div.append(buttonA);
	div.append(history);
	
	li.append(p);
	li.append(div);

	tasks.append(li);
  // allChanges.push(p.textContent);
  // console.log(allChanges);
  opt.value = task.value;
  opt.innerHTML = task.value;
  history.append(opt);

	deleteAll.onclick = deleteAllTasks;
	submit.disabled = true;
	task.value = "";

	return false;

} 

setInterval(noTask, 100);

function noTask() {
	if (tasks.children.length === 0) {
		noTaskLi.innerHTML = 'No Task';
    noTaskLi.className = 'no-task-li';
		tasks.append(noTaskLi);
	} else if (tasks.children.length > 1) {
		noTaskLi.remove()
	}
	
}

setInterval(noArchive, 100);

function noArchive() {
	if (archive.children.length === 0) {
		noArchiveLi.innerHTML = 'No Archive';
    noArchiveLi.className = 'no-archive-li';
		archive.append(noArchiveLi);
	} else if (archive.children.length > 1) {
		noArchiveLi.remove();
	}
}


function deleteAllTasks() {
	for (let task = tasks.children.length - 1; task > -1; task--) {
		tasks.children[task].remove();
	}
}
