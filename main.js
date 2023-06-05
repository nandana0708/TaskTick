import './style.css'

//Selectors

const addTask = document.querySelector('.new-task');
const addTaskBtn = document.querySelector('.new-task-btn');
const todoList = document.querySelector('.todo-list');
const menuList = document.querySelector('.dropdown');


let taskDiv;

//Event listeners
addTaskBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
todoList.addEventListener('click',checkMark);
todoList.addEventListener('click',dropdown);

//Functions


function addTodo(event){
  //create div class="task"
  taskDiv = document.createElement('div');
  taskDiv.classList.add("task");

  //check button 
  const completed = document.createElement('button');
  completed.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
  completed.classList.add("completed-btn");
  taskDiv.appendChild(completed);
  //create li
  const newTask = document.createElement('li');
  newTask.innerText = addTask.value;
  newTask.classList.add('todo-item');

  taskDiv.appendChild(newTask);
  //dots
  const more = document.createElement('button');
  more.innerHTML= '<i class="fa-solid fa-ellipsis-vertical"></i>';
  more.classList.add("more-btn");
  taskDiv.appendChild(more);
  //trash button
  const trash = document.createElement('button');
  trash.innerHTML= '<i class="fa-solid fa-trash"></i>';
  trash.classList.add("trash-btn");
  taskDiv.appendChild(trash);

  //append to ul
  todoList.appendChild(taskDiv);
  //After appending we clear input box
  addTask.value = "";

}



function deleteCheck(e){
  const item = e.target;
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('animationend', function() {
      todo.remove();
    });
  }
}

function checkMark(e){
  const item = e.target;
  if(item.classList[0] === 'completed-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed-task");
  }
}

let flag =false;
function createDropdown(e){
    //creating input
    const editor = document.createElement("input");
    editor.setAttribute("type", "text");
    editor.classList.add('editor');
    menuList.appendChild(editor);

    //creating star option
    const star = document.createElement('li');
    star.classList.add("morestuff");
    const icon = document.createElement('button');
    const name = document.createElement('button');
    icon.innerHTML= '<i class="fa-solid fa-star"></i>';
    name.innerText='Important';
    icon.classList.add('menu-btns');
    name.classList.add('menu-btns');
    star.appendChild(icon);
    star.appendChild(name);
    menuList.appendChild(star);
    //creating edit option
    const edit = document.createElement('li');
    edit.classList.add("morestuff");
    const icon1 = document.createElement('button');
    const name1 = document.createElement('button');
    icon1.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
    name1.innerText='Edit';
    icon1.classList.add('menu-btns');
    name1.classList.add('menu-btns');
    edit.appendChild(icon1);
    edit.appendChild(name1);
    menuList.appendChild(edit);
    //creating detail option 
    const dets = document.createElement('li');
    dets.classList.add("morestuff");
    const icon2 = document.createElement('button');
    const name2 = document.createElement('button');
    icon2.innerHTML= '<i class="fa-solid fa-circle-info"></i>';
    name2.innerText='Details';
    icon2.classList.add('menu-btns');
    name2.classList.add('menu-btns');
    dets.appendChild(icon2);
    dets.appendChild(name2);
    menuList.appendChild(dets);
    //creating date
    const date = document.createElement('li');
    date.classList.add("morestuff");
    const icon3 = document.createElement('button');
    const name3 = document.createElement('button');
    icon3.innerHTML= '<i class="fa-regular fa-calendar"></i>';
    name3.innerText='Date';
    icon3.classList.add('menu-btns');
    name3.classList.add('menu-btns');
    date.appendChild(icon3);
    date.appendChild(name3);
    menuList.appendChild(date);

    flag = true;
}


function dropdown(e){
  const item = e.target;
    if(item.classList[0] === 'more-btn'){
      console.log('hi');
      if(flag){
        menuList.classList.toggle("close");
        menuList.addEventListener('transitionend', function (){
          document.querySelectorAll('morestuff').remove;
        })
      }
      else{
        createDropdown();
      }
   }
}

window.addEventListener('click', function(event){
	var box = document.getElementById('dropdown');
	if (!event.target === 'more-btn'){
    console.log('hii');
    box.classList.toggle("close");
    box.addEventListener('transitionend', function (){
      document.querySelectorAll('morestuff').remove;
    })    
  }
});
