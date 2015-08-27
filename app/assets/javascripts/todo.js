function getTaskData() {
  return {
    name: $("#name").val()
  }
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

function destroyTask(event) {
  var taskId = $(this).parent().attr('id');
  var task = $(this).parent();

  $.ajax({
      method: "DELETE",
      url: "/tasks/" + taskId,
      data: { id: taskId },
      success: function(event) {
        $(task).parent().remove();
      }
    });
};

function highlightTasksDueToday() {
  var todaysTasks = getTodaysTasks();
  setBackgroundColor(todaysTasks);
};

function getTodaysTasks() {
  var todaysDate = getTodaysDate();
  var tasksDueToday = [];
  var taskDueDates = $("#tasks").find(".due-date");

  for (var i = 0; i < taskDueDates.length; i++) {
    var date = $(taskDueDates[i]).text();
    if (date === todaysDate) {
      var taskElement = $(taskDueDates[i]).parent();
      tasksDueToday.push(taskElement);
    }
  }

  if (tasksDueToday.length > 0) {
    return tasksDueToday;
  }
};

function getTodaysDate() {
  var todaysDate = new Date(); // gets today's date
  var year = todaysDate.getFullYear(); // returns the 4-digit year (2015)
  var month = todaysDate.getMonth(); // returns the month number (i.e. August = 7)
  var date = todaysDate.getDate(); // returns the date number (i.e. 1-31)

  var formattedDate = year + '-' + month + '-' + date;
  return formattedDate;
};

function setBackgroundColor(tasksDueToday) {
  for (var i = 0; i < tasksDueToday.length; i++) {
    tasksDueToday[i].css('background-color', 'yellow');
  }
}

$(document).ready(function() {
  $("#submit-task").submit(function(event) {
    event.preventDefault();
    createTask();
  });

  $("#highlight-due-today").click(highlightTasksDueToday);

  $('.delete-task').click(destroyTask);

});

