const body = $("body");
const header = $("<h1></h1>")
const listItem = $("<ul></ul>");
const button = $("<button></button>");
const inputToDo = $("<input/>");
header.text("To Do List :");
button.text("Add To List");

const arr = [];

header.appendTo(body);
listItem.appendTo(header);
inputToDo.appendTo(header);
button.appendTo(header);

let list = JSON.parse(localStorage.getItem("ToDos"));
// console.log(list)
const addList = () => {
 list.forEach((element) => {
    const toDo = $("<li></li>");
    const deleteButton = $(`<button class="delete";><i class="fas fa-trash-alt"></i></button>`);
    const updateButton = $(`<button class="edit";><i class="far fa-edit"></i></button>`);
    const updateToDo = $("<input/>");
    toDo.text(element);
    listItem.append(toDo);
    toDo.append(deleteButton);
    toDo.append(updateButton);
    toDo.append(updateToDo);

    deleteButton.on("click", () => {
      list.forEach((toDo, i) => {
        if (element === toDo) {
          list.splice(i, 1);
        }
      });
      toDo.remove();
    });

    updateButton.on("click", () => {
      list.forEach((toDo, i) => {
        if (element === toDo) {
          list[i] = updateToDo.val();
        }
      });

      listItem.html("");
      addList();
    });
  });
};
const addToList = () => {
  list.push(inputToDo.val());
  localStorage.setItem("ToDos", JSON.stringify(arr));
  //  JSON.parse(localStorage.removeItem("toDos"));
  listItem.html("");
  addList();
};

button.on("click", () => {
  addToList();
});

addList();

// Window.localStorage
// localStorage.getItem("Key")

// list.push(input);
  // window.localStorage.removeItem( "ToDos");
  // localStorage.removeItem = null;
