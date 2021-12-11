const body = $("body")
const header = $("<h1></h1>")
const listList = $("<ul></ul>") 
const addButton = $("<button></button>")
const inputToDo = $("<input/>")
header.text("To Do List")
addButton.text("Add To List")
const list = [];
header.appendTo(body)
listList.appendTo(header)
inputToDo.appendTo(header)
addButton.appendTo(header)
const addList = () => {
    list.forEach(element => {
        const toDo = $("<li></li>")
        const deleteButton = $("<button>Delete</button>")
        const updateButton =  $("<button>Update</button>")
        const updateToDo = $("<input/>")
        toDo.text(element)
        listList.append(toDo)
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
              
              listList.html("")
              addList()   
        })
    })
}
const addToList = () => {
    list.push(inputToDo.val())
    listList.html("")
    addList()
}

addButton.on("click", () => {
    addToList()
});

addList()
  