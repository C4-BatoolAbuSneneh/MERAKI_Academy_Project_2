const body = $("body");
const header = $("<h1>To Do List </h1>");
header.appendTo(body);
const list = $("<ul></ul>");
list.appendTo(body);
const tasks = $("<p>Tasks :</p>")
tasks.appendTo(body)
const inputName = $("</input>");
const button = $("<button >Add To List</button>");
button.id = ("add")
inputName.appendTo(body);
button.appendTo(body);
let todo=[];
const addItems = () => {
   $(document).ready( () => {
    $("#btn").click(function(){
    $("li").append("<p>Tasks :</p>");
  });
  // $("#btn").click( () => {
  //   $("#btn").append("<p>Tasks :</p>")
  // })
  })
    // li.appendTo(list)
}




//////////////////////////////////////////


