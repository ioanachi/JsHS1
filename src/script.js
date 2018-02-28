




var users = [{
    id: 1,
    name: "Mougli"
}, {
    id: 2,
    name: "Jane"
}, {
    id: 3,
    name: "Carol"
}];

var issues = [{
    id: 1,
    type: "features",
    name: "First project",
    sprint: 1,
    createdBy: 2,
    assignee: 3,
    description: "create a function",
    status: 2,
    tasks: [2, 9],
    comments: [4, 2, 5],
    updatedAt: 14 - 03 - 2018,
    createdAt: 03 - 05 - 2018,
},
{
    id: 2,
    type: "tasks",
    name: "Second project",
    sprint: 2,
    createdBy: 1,
    assignee: 3,
    description: "update a table",
    status: 2,
    tasks: [8, 4],
    comments: [1, 4],
    updatedAt: 17 - 05 - 2018,
    createdAt: 30 - 05 - 2018,
},
{
    id: 3,
    type: "bug",
    name: "Third project",
    sprint: 3,
    createdBy: 2,
    assignee: 1,
    description: "Timezones",
    status: 3,
    tasks: [7, 2],
    comments: 1,
    updatedAt: 1 - 03 - 2018,
    createdAt: 8 - 03 - 2018,
}];

var projects = [{
    id: 1,
    sprints: 3
}, {
    id: 2,
    sprints: 4
}, {
    id: 3,
    sprints: 2
}];

var sprints = [{
    id: 1,
    name: "functionality"
}, {
    id: 2,
    name: "interface"
}, {
    id: 3,
    name: "updates"
}];

var comments = [{
    id: 1,
    name: "complain about buttons"
}, {
    id: 2,
    name: "complain about user experience"
}, {
    id: 3,
    name: "ask for a new feature"
}];
var states = [{
    id: 0,
    value: "new"
}, {
    id: 1,
    value: "in progress"
}, {
    id: 2,
    value: "feedback"
}, {
    id: 3,
    value: "rework"
}, {
    id: 4,
    value: "resolved"
}];

var todaysDate = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today
};

function createIssue(userID) {
    var newIssue = {}
    newIssue.id = issues[issues.length - 1].id + 1;
    newIssue.createdBy = userID;
    newIssue.createdAt = todaysDate();
    newIssue.updatedAt = todaysDate();
    newIssue.status = states[0];
    issues.push(newIssue);

};
createIssue(users[1].id);







// console.log(issues);

// var recursiveFunc = function (parentArr, arr, stateToChange, parentIss) {
//     for (var i = 0; i < arr.length - 1; i++)
//         // loop through issues and find the corresponding ones to change the sprint status
//         parentArr.forEach(function (childIss) {
//             if (childIss.id == arr[i]) {
//                 childIss.stateToChange = parentIss.stateToChange;
//                 //find the issue adn chande the sprint status
//             }
//         })

// }




function updateIssue(issueToUpdateId, newSprint) {
    issues.forEach(function (item) {
        if (issueToUpdateId == item.id) {
            //find the issue to change according to the id parameter of the function by looping through all of its elements

            var subtsk = [];
            //first: get the array of subtasks by creating a variable to store the subtasks of the current issue
            let arrOfSubtasks = item.tasks;
            // create an array with all the ids of the subtasks



            if (item.sprint != newSprint) {
                //if the sprint is changed then change the subtasks:...
                // recursiveFunc(issues, arrOfSubtasks, sprint, item)
                for (var i = 0; i < arrOfSubtasks.length - 1; i++) {
                    // loop through the array of issues and find the issues from the array  according to ids
                    issues.forEach(function (element) {
                        if (element.id == arrOfSubtasks[i]) {
                            //retain into a variable the subtasks of the element
                            subtsk.push(element);
                            element.sprint = item.sprint
                        }

                    })
                }
            }

            //check if the issue has a change in task from new to any other
            if (item.status != states[0]) {
                subtsk.forEach(function (subiss) {
                    subiss.status = item.status
                    //find the issue and chande the task status
                }
                })
    subtsk.forEach(function (subiss) {
        if (subiss.status == states[5]) {
            item.status =
        }
    }


    // let arrOfSubtasks = item.tasks;
    // for (var i = 0; i < arrOfSubtasks.length - 1; i++) {
    //     issues.forEach(function (element) {
    //         if (element.id == arrOfSubtasks[i]) {
    //             element.status = item.status
    //         }
    //     })
    // }
}

        }
    })
}
updateIssue(1, 2)