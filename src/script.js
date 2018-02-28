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

var Issues = [{
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
    updatedAt: 14.03,
    createdAt: 3.05,
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
    comments: [1, 4, 9],
    updatedAt: 17.05,
    createdAt: 30.05,
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
    tasks: [1, 2],
    comments: 1,
    updatedAt: 1.03,
    createdAt: 8.03,
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
var states = ["new", "in progress", "feedback", "rework", "resolved"];

function createIssue()