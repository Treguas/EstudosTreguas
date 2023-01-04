const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.onsubmit = (e) => {
  e.preventDefault()
  const input = form.querySelector('input');
  const value = input.value;
  clearData();
  if (value == '') return alert('Preencha com um item');

  setItemLocalStorage(value);

  let items = getItemLocalStorage();

  for(let i in items) {
    ul.innerHTML += `<li class="myLi px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
    <span>${items[i].description}</span>
    <button class="text-red-700 delete" id="${items[i].id}">ⅹ</button>
    <button class="text-red-700" id="${items[i].id}" onclick="editar(event)">editar</button>
    </li>`
  }


  input.value = "";
}

ul.onclick = (event) => {
  let allItems = getItemLocalStorage();
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
    let uuid = event.target.id
    var indice = allItems.indexOf(uuid);
    allItems.splice(indice, 1);

    localStorage.setItem("todo", JSON.stringify(allItems));
  }
}

function editar(event) {
  let allItems = getItemLocalStorage();
  console.log(event)
  event.target.parentElement.remove();
  document.getElementById('input-add').value = event.target.parentElement.firstElementChild.textContent;
  let uuid = event.target.id
  var indice = allItems.indexOf(uuid);
  allItems.splice(indice, 1);
  localStorage.setItem("todo", JSON.stringify(allItems));

}

const setItemLocalStorage = (description) => {
  const todo = new Array();

  const id = Math.floor(Date.now() * Math.random()).toString(36);
  let allItems = getItemLocalStorage();

  if(allItems) {
    for (let i in allItems) {
      todo.push(allItems[i])
    }
  }

  todo.push({
    id,
    description
  });

  localStorage.setItem("todo", JSON.stringify(todo));
}

const getItemLocalStorage = () => {
  const allTodo = JSON.parse(localStorage.getItem("todo"));
  if (allTodo) return allTodo;

  return null;
}

function clearData() {
  let uls = document.querySelectorAll('ul');

  uls.forEach((item) => {
    let myarr = Array.from(item.children)
    myarr.map(li => {li.remove()})
  })
}