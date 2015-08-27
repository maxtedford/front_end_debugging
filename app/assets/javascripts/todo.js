function getTaskData() {
  { name: $("#name").val(); }
};

function createTask() {
  var taskData = getTaskData();
  $.post("/tasks",
       taskData,
       function(data) {
           $("#tasks").append(data);
           $("#name").val("");
       });
};

$("#submit-task").submit(function(event) {
  event.preventDefault();
  createTask();
});
