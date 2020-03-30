const ExampleController = require('../controller/example_controller');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) =>{
            return h.response({"status":"running"}).code(200)
        }
    },
    // {
    //     method: "GET",
    //     path: "/api/posts/get-comments",
    //     config : ExampleController.getAllComments
    // },
    // {
    //     method: "POST",
    //     path: "/api/posts/add-comment",
    //     config: ExampleController.addComment
    // },
    {
        method: "GET",
        path: "/api/students",
        config: ExampleController.getAllStudentsList
    },
    {
        method: "GET",
        path: "/api/students/{roll_no}",
        config: ExampleController.getStudent
    },
    {
        method: "DELETE",
        path: "/api/students/{roll_no}",
        config: ExampleController.deleteStudent
    },
    {
        method: "POST",
        path: "/api/students",
        config: ExampleController.addStudent
    }
]