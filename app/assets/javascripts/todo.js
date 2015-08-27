function getTaskData() {
  return { name: $("#name").val() }
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

$('document').ready(function() {
  $("#submit-task").submit(function(event) {
    event.preventDefault();
    createTask();
  });
});
