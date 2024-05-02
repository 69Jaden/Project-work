function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
  
    if (task !== "") {
      var listItem = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          listItem.classList.add("completed");
        } else {
          listItem.classList.remove("completed");
        }
      });
  
      var label = document.createElement("label");
      label.innerText = task;
  
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
  
      document.getElementById("taskList").appendChild(listItem);
  
      input.value = "";
    }
  }