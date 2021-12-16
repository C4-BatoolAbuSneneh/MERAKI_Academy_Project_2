const localStorage = window.localStorage;
const firstPage = $(".firstPage");
const toDoList = $(`<h3></h3>`);
const img = $(
  `<img class="img" src="images/128697255-multitasking-business-woman-person-working-hard-but-happy-on-office-table-desk-vector-illustration-f.webp" alt="organize">`
);
const header1 = $("<h2></h2>");
const button1 = $(`<button class="getstarted">Get Started</button>`);

header1.text("Start enjoying a more organized life");
toDoList.text("To-Do List");

toDoList.appendTo(firstPage);
img.appendTo(firstPage);
header1.appendTo(firstPage);
button1.appendTo(header1);

const secondPage = $(".secondPage");
const header = $("<h1></h1>");
const header4 = $("<h6> Add New To-Do </h6>")
const button = $(`<button class="addtolist"></button>`);
const inputToDo = $(`<input class="input1" placeholder=" Enter Your Task"/>`);
const listItem = $("<ul></ul>");
header.text(" To-Do App! ");
button.text("Add");

secondPage.hide()

let list = [];

header.appendTo(secondPage);
header4.appendTo(header)
inputToDo.appendTo(header);
button.appendTo(header);
listItem.appendTo(header);

button1.on("click", () => {
  firstPage.hide();
  secondPage.show();
});

const addList = () => {
  list = JSON.parse(localStorage.getItem("ToDos"));
  list.forEach((element) => {
    const toDo = $(`<li></li>`);  

    const deleteButton = $(
      `<button class="delete";><i class="fas fa-trash-alt"></i></button>`
    );
    const line = $(
      `<button class="line";><i class="fas fa-check"></i></button>`
    );
    const updateButton = $(
      `<button class="edit";><i class="far fa-edit"></i></button>`
    ); 
    
    const updateToDo = $(`<input class="editbutton" placeholder=" Edit Your Task"/>`);

    toDo.text(element);


    listItem.append(toDo);
    toDo.append(deleteButton);
    toDo.append(line);
    toDo.append(updateButton);
    toDo.append(updateToDo);

    updateButton.on("click", () => {
      updateToDo.show()
    });

    deleteButton.on("click", () => {
      list.forEach((toDo, i) => {
        if (element === toDo) {
          list.splice(i, 1);
        }
      });
      localStorage.setItem("ToDos", JSON.stringify(list));

      toDo.remove();
    });

    updateButton.on("click", () => {
      list.forEach((toDo, i) => {
        if (element === toDo) {
          list[i] = updateToDo.val();
        }   
      });  
      listItem.html("");
      localStorage.setItem("ToDos", JSON.stringify(list));
    
      addList();
    });
    line.on("click", () => {
      toDo.css("text-decoration-line", "line-through");
    });
  });
};
const addToList = () => {
  list.push(inputToDo.val());
  listItem.html("");
  localStorage.setItem("ToDos", JSON.stringify(list));

  addList();
};

button.on("click", () => {
  addToList();

});

addList();
