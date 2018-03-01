




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
    status: 4,
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
function updateIssue(issueToUpdateId, newSprint) {
    issues.forEach(function (item) {
        if (issueToUpdateId == item.id) {
            //find the issue to change according to the id parameter of the function by looping through all of its elements

            var subtsk = [];
            //first: get the array of subtasks by creating a variable to store the subtasks of the current issue
            let arrOfSubtasks = item.tasks;
            // create an array with all the ids of the subtasks

            console.log(item, "subtsk");


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
            if (item.status != states[0].id) {
                subtsk.forEach(function (subiss) {
                    subiss.status = item.status
                    //find the issue and chande the task status
                })
            }
            
            function isCompleted(subtaskid) {
                if (subtaskid == states[4].id) {
                    item.status = states[2].id
                }
                return false;
            }
            subtsk.every(isCompleted);

        }
    })
}
updateIssue(2, 2)


var newSprintValues = {
    id: 5,
    name: "menu"
}
function createSprint(newSprintValues) {
    var newSprint = {};
    newSprint.id = newSprintValues.id;
    newSprint.name = newSprintValues.name;
    sprints.push(newSprint);
}



var returnProjectSprints = [];
var returnProjectBugs = [];
var returnProjectFeatures = [];
var returnProjectIssues = [];


function returnProject(projID) {
    projects.forEach(function (proj) {
        if (projID == proj.id) {
            var projectSprints = proj.sprints;
            projectSprints.forEach(function (sprintProj) {
                issues.forEach(function (iss) {
                    var issSprint = iss.sprint;
                    issSprint.forEach(function (sprintOfIss) {
                        if (sprintOfIss == sprintProj) {
                            returnProjectIssues.push(iss);
                            returnProjectSprints.push(sprintOfIss);
                            if (iss.type == "bugs") {
                                returnProjectBugs.push(iss.id);
                            } else if (iss.type == "features") {
                                returnProjectFeatures.push(iss.id);
                            }
                        }
                    })

                })
            })
        }
    })
    var projectData = "project" + projID + "has" + returnProjectSprints.length + "sprints" + returnProjectIssues.length + "issues" + returnProjectBugs + "bugs" + returnProjectFeatures + "features";
    return projectData;
}

var returnStatusIssues = []; // will contain all the issues with that status

var returnSprintIssues = [];// will contain all the issues with that sprint id




function filterByStatus(statesName) {
    let returnStatusId = states.filter(status => status.value == statesName);
    returnStatusId = returnStatusId[0];
    //variable returnStatusId has the id of the statues the user filters by
    returnStatusId = returnStatusId.id;
    //variable returnStatusIssues is an array with the issues that have the status id required
    returnStatusIssues = issues.filter(issu => issu.status == returnStatusId)
    return returnStatusIssues
}

filterByStatus("rework");
//function to filter by status takes as a parameter the name of the status








function filterIssueBySprint(sprintID) {
        console.log( issues);
        issues.forEach(function (isue) {
        var sprintidInIssues = isue.sprint;
        console.log( isue.sprint);
        
        if(sprintID===isue.sprint){

        }
    })
    
    // return returnSprintIssues
}
filterIssueBySprint(3);