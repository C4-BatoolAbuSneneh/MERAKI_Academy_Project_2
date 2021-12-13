$(() => {
  const body = $("body");
  const header = $("<h1></h1>")
  const listItem = $("<ul></ul>");
  const button = $("<button></button>");
  const inputToDo = $("<input/>");

  header.text("To Do List :");
  button.text("Add To List");

  header.appendTo(body);
  listItem.appendTo(header);
  inputToDo.appendTo(header);
  button.appendTo(header);

  const list = JSON.parse(localStorage.getItem("ToDos")) || [];
  const addList = () => {
     console.log(list);
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
        toDo.remove();
    localStorage.setItem("ToDos", JSON.stringify(list));
      });

      updateButton.on("click", () => {
        list.forEach((toDo, i) => {
          if (element === toDo) {
            list[i] = updateToDo.val();
          }
        });

        listItem.html("");
        addList();
        localStorage.setItem("ToDos", JSON.stringify(list));
      });
      line.on("click", () =>{
        toDo.css('text-decoration-line', 'line-through')
})
    });
  }; 
  const addToList = () => {
    list.push(inputToDo.val());
    localStorage.setItem("ToDos", JSON.stringify(list));

    listItem.html("");
    addList();
  };

  button.on("click", () => {
    addToList();
  });

  addList();
});
















//       let list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'list') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);