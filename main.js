const body = $("body")
const header = $("<h1></h1>")
const list = $("<ul></ul>")
const button = $("<button></button>")
const inputList = $("<input/>")
header.text("To Do List")
button.text("Add To List")
const array = [];
header.appendTo(body)
list.appendTo(header)
inputList.appendTo(header)
button.appendTo(header)

const addList = () => {
array.forEach(element  =>{
const toDo = $("<li></li>")
const deleteButton = $("<button>Delete</button>")
const updateButton = $("<button>Update</button>")
const updateToDo = $("<input/>")
toDo.text(element)
list.append(toDo)
toDo.append("deleteButton")
toDo.append("updateButton")
toDo.append("updateToDo")
deleteButton.on("click", () => {
  array.forEach((toDo, i) => {
    if (element === toDo) {
      list.splice(i, 1)
    }
  })
  toDo.remove()
})
updateButton.on("click", () => {
