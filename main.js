const localStorage = window.localStorage;

  const body = $("body");
  const header = $("<h1></h1>")
  
  const button = $("<button></button>");
  const inputToDo = $("<input/>");
const listItem = $("<ul></ul>");
  header.text("To Do List :");
  button.text("Add To List");
  
  let list = [];

  header.appendTo(body);
  listItem.appendTo(header);
  inputToDo.appendTo(header);
  button.appendTo(header);

  const addList = () => {
     list =  JSON.parse(localStorage.getItem("ToDos")) ;
    list.forEach((element) => {
      const toDo = $("<li></li>");
      const deleteButton = $(`<button class="delete";><i class="fas fa-trash-alt"></i></button>`);
      const line = $(`<button class="line";><i class="fas fa-check"></i></button>`);
      const updateButton = $(`<button class="edit";><i class="far fa-edit"></i></button>`);
      const updateToDo = $("<input/>");
      toDo.text(element);
      listItem.append(toDo);
      toDo.append(deleteButton);
      toDo.append(line);
      toDo.append(updateButton);
      toDo.append(updateToDo);

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
      line.on("click", () =>{
        toDo.css('text-decoration-line', 'line-through')
        localStorage.setItem("ToDos", JSON.stringify(list)); 
})
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













