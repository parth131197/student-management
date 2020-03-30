const   Response            = require('../utils/response'),
        ResponseMessage     = require('../utils/responseMessages'),
        StatusCode          = require('../utils/statusCodes'),
        Constant            = require('../utils/constants'),
        ItemListStore       = require('../models/example_model'),
        PgClient            = require('../servers/postgres_server');

exports.getAllComments = async(request, reply)=>{
    try{
        let dummyData = Constant.DUMMY_GET_RESPONSE;
       return reply.response(Response.sendResponse(true, dummyData, ResponseMessage.SUCCESS, StatusCode.OK));
    }catch(error){
       return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.addComment = async(request, reply)=>{

    try{
        return reply.response(Response.sendResponse(true, "Comment Added", ResponseMessage.SUCCESS, StatusCode.OK)).code(StatusCode.OK);
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST)).code(StatusCode.BAD_REQUEST);
    }
}

exports.getAllStudentsList = async(request, reply)=>{
    try{
        let studentsList = await PgClient.query('SELECT * FROM students;');
        return reply.response(Response.sendResponse(true,studentsList.rows , ResponseMessage.SUCCESS, StatusCode.OK));
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST));
    }
}

exports.getStudent = async(request, reply)=>{
    try{
        let roll_no= request.params['roll_no'];
        let student = await PgClient.query('SELECT * FROM students WHERE rollno = $1;',[roll_no]);
        return reply.response(Response.sendResponse(true, student.rows , ResponseMessage.SUCCESS, StatusCode.OK)).code(StatusCode.OK);
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST)).code(StatusCode.BAD_REQUEST);
    }
}

exports.addStudent = async(request, reply)=>{
    try{
        let payload = request.payload;
        let student = await PgClient.query('INSERT INTO students values($1,$2,$3,$4);',[payload['roll_no'],payload['name'],payload['age'],payload['section']]);
        return reply.response(Response.sendResponse(true, "Student Added" , ResponseMessage.SUCCESS, StatusCode.OK)).code(StatusCode.OK);
    }catch(error){
        return reply.response(Response.sendResponse(false, error.detail, ResponseMessage.ERROR, StatusCode.BAD_REQUEST)).code(StatusCode.BAD_REQUEST);
    }
}

exports.deleteStudent = async(request, reply)=>{
    try{
        let roll_no= request.params['roll_no'];
        let student = await PgClient.query('DELETE FROM students WHERE rollno = $1;',[roll_no]);
        return reply.response(Response.sendResponse(true, "Student Deleted" , ResponseMessage.SUCCESS, StatusCode.OK)).code(StatusCode.OK);
    }catch(error){
        return reply.response(Response.sendResponse(false, error, ResponseMessage.ERROR, StatusCode.BAD_REQUEST)).code(StatusCode.BAD_REQUEST);
    }
}

