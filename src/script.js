




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
    sprint: 3,
    createdBy: 2,
    assignee: 3,
    description: "create a function",
    status: 2,
    tasks: [2, 9],
    comments: [4, 2, 5],
    updatedAt: "14 - 03 - 2018",
    createdAt: "03 - 05 - 2018",
},
{
    id: 2,
    type: "tasks",
    name: "Second project",
    sprint: 1,
    createdBy: 1,
    assignee: 3,
    description: "update a table",
    status: 2,
    tasks: [],
    comments: [1, 4],
    updatedAt: "17 - 05 - 2018",
    createdAt: "30 - 05 - 2018",
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
    updatedAt: '1 - 03 - 2018',
    createdAt: "8 - 03 - 2018",
}];

var projects = [{
    id: 1,
    sprints: [3, 7]
}, {
    id: 2,
    sprints: [4, 5]
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
var newIssueValues = {
    type: "bug",
    name: "Fourth Project",
    sprint: 4,
    assignee: 3,
    description: "other functions",
    status: 1,
    tasks: [5, 6],
    comments: 3,
}
function createIssue(userID, issueVal) {
    var newIssue = {}
    newIssue.id = issues[issues.length - 1].id + 1;
    newIssue.createdBy = userID;
    newIssue.name = issueVal.name;
    newIssue.sprint = issueVal.sprint;
    newIssue.assignee = issueVal.assignee;
    newIssue.description = issueVal.description;
    newIssue.status = issueVal.status;
    newIssue.tasks = issueVal.tasks;
    newIssue.comments = issueVal.comments;
    newIssue.createdAt = todaysDate();
    newIssue.updatedAt = todaysDate();
    newIssue.status = states[0];
    issues.push(newIssue);

};
createIssue(users[1].id, newIssueValues);




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


function isCompleted(subtaskid) {
    return subtaskid == states[4].id
}

function updateIssue(issueToUpdateId, newSprint) {
    issues.forEach(function (item) {
        if (issueToUpdateId == item.id) {
            //find the issue to change according to the id parameter of the function by looping through all of its elements

            var subtsk = [];
            //first: get the array of subtasks by creating a variable to store the subtasks of the current issue
            let arrOfSubtasks = item.tasks;
            // create an array with all the ids of the subtasks

            console.log(item.sprint, newSprint, arrOfSubtasks, "subtsk");

            if (item.sprint != newSprint) {
                item.sprint = newSprint; // if the sprint differs from the new one then change the sprint of the issue and change all the subtasks issues  else no change
                //if the sprint is changed then change the subtasks:...
                // recursiveFunc(issues, arrOfSubtasks, sprint, item)
                for (var i = 0; i < arrOfSubtasks.length - 1; i++) {
                    // loop through the array of issues and find the subissues from the array  according to ids
                    issues.forEach(function (element) {
                        if (element.id == arrOfSubtasks[i]) {
                            //retain into a variable the subtasks of the issue
                            subtsk.push(element);

                            element.sprint = newSprint;
                        }

                    })
                }
            }
            //check if the issue has a change in task from new to any other
            // task changes its status from New to any other, it's corresponding issue will change it's status as well to it's parent status.
            if (item.status != states[0].id) {
                subtsk.forEach(function (subiss) {
                    subiss.status = item.status
                    //find the issue and chande the task status
                })
            }


            if (subtsk.every(isCompleted)) {
                item.status = states[2].value;
            };

        }
    })
}
updateIssue(1, 2);


var newSprintValues = {
    id: 5,
    name: "menu"
}
function createSprint(newValues) {
    var newSprint = {};
    newSprint.id = newValues.id;
    newSprint.name = newValues.name;
    sprints.push(newSprint);
}
createSprint(newSprintValues);


var returnProjectSprints = [];
var returnProjectBugs = [];
var returnProjectFeatures = [];
var returnProjectIssues = [];


//user needs to see an overview of the current project, broken down per sprints, how many issues in each status, how many features, how many bugs, etc
//function that takes as a parameter the project id
function returnProject(projID) {
    //filter through ihe arr of projects to find the one that has the parameter passed to the function
    let projectToSearch = projects.filter(function (proj) { return proj.id == projID });
    console.log(projectToSearch[0].sprints, "projectToSearch");
    // the id is unique, so there is only one project with that id so one projetct to return values, so projectToSearch[0].sprints returns all the sprints of that project
    returnProjectSprints = projectToSearch[0].sprints; //variable that retains all the sprints of the project;
    // to return the issues of that project we need to filter through the arr of issues and return those that have the sprints of the project
    issues.forEach(function (iss) {
        issSprint = iss.sprint;
        returnProjectSprints.forEach(function (sprintsId) {
            if (iss.sprint == sprintsId) {
        // console.log(iss.sprint, "issSprint");
                
                if (iss.type == "bugs") {
                    returnProjectBugs.push(iss.id);
                } else if (iss.type == "features") {
                    returnProjectFeatures.push(iss.id);
                }
            }
        })
    })


    var projectData = "project" + projID + "has" + returnProjectSprints.length + "sprints" + returnProjectIssues.length + "issues" + returnProjectBugs + "bugs" + returnProjectFeatures + "features";
    console.log(projectData);

    return projectData;
}
returnProject(2);









var returnStatusIssues = []; // will contain all the issues with that status

var returnSprintIssues = [];// will contain all the issues with that sprint id



function filterByStatus(statesName) {
    // find the status id from the status name by filtring through the arr of states
    let returnStatusId = states.filter(function (status) { return status.value == statesName });
    returnStatusId = returnStatusId[0];

    //variable returnStatusId has the id of the statues the user filters by
    returnStatusId = returnStatusId.id;

    //variable returnStatusIssues is an array with the issues that have the status id required
    returnStatusIssues = issues.filter(function (issu) { return issu.status == returnStatusId })
    console.log(returnStatusIssues, "returnStatusIssues");

    return returnStatusIssues
}

filterByStatus("rework");
//function to filter by status takes as a parameter the name of the status








function filterIssueBySprint(sprintID) {
    console.log(issues);

    issues.forEach(function (isue) {
        var sprintidInIssues = isue.sprint;

        if (sprintID === isue.sprint) {
            returnSprintIssues.push(isue);
        }
    })
    // return the array that contains all the issues withn that sprint id, you have to loop though them in order to return the issues names
    let namesOfIssues = [];
    returnSprintIssues.forEach(function (issue) {
        namesOfIssues.push(issue.name)

    })
    returnSprintIssues = namesOfIssues
    return returnSprintIssues;
}
filterIssueBySprint(3);
console.log(returnSprintIssues);
