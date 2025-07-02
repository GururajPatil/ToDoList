const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function addTodo() {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', () => li.remove());
  li.addEventListener('click', () => li.classList.toggle('done'));
  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = '';
}

addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});
