const body = $("body")
const header = $("<h1></h1>")
const listItem = $("<ul></ul>")
const button = $("<button></button>")
const inputToDo = $("<input/>")
header.text("To Do List :")
button.text("Add To List")

const list = [];

header.appendTo(body)
listItem.appendTo(header)
inputToDo.appendTo(header)
button.appendTo(header)

const addList = () => {
    list.forEach(element => {
        const toDo = $("<li></li>")
        const deleteButton = $("<button>Delete</button>")
        const updateButton =  $("<button>Update</button>")
        const updateToDo = $("<input/>")
        toDo.text(element)
        listItem.append(toDo)
        toDo.append(deleteButton)
        toDo.append(updateButton)
        toDo.append(updateToDo)

        deleteButton.on("click", () => {
            list.forEach((toDo, i) => {
              if (element === toDo) {
                list.splice(i, 1)
              }
            })
            toDo.remove()
        })

        updateButton.on("click", () => {
           list.forEach((toDo, i) => {
                if (element === toDo) {
                  list[i] = updateToDo.val()                           
                }
              })
              
              listItem.html("")
              addList()   
        });
    });
};
const addToList = () => {
    list.push(inputToDo.val())
    listItem.html("")
    addList()
};

button.on("click", () => {
    addToList()
});

addList()

Window.localStorage
localStorage.getItem("Key")
