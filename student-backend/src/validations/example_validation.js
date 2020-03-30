const Joi               = require("@hapi/joi"),
      Response          = require('../utils/response'),
      ResponseMessage   = require('../utils/responseMessages'),
      StatusCode        = require('../utils/statusCodes'),
      Constant          = require('../utils/constants'),
      log               = require('logger/logger');

module.exports = Object.freeze({
    getComments :{
        query:{
            post_id : Joi.string().trim().required().example('12345')
        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    addComment:{
        payload:{
            date: Joi.string().trim().required().example('12/2/2019'),
            comment: Joi.string().trim().required().example('Nice Hat!'),
            post_id: Joi.string().trim().required().example('12345'),
            mention: Joi.array().items(
                Joi.string().trim().example('James Carl')
            ).allow(null)
        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    getStudent:{
        params:{
            roll_no: Joi.number().required().example(1)
        },
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    },
    addStudent:{
        payload:{
            roll_no: Joi.number().required().example(1),
            name: Joi.string().trim().required().example('James Paul'), 
            age: Joi.number().required().example(20),
            section: Joi.string().trim().required().example('Bsc'),
        }, 
        failAction(request, reply, error) {
            log.error("Payload error:",error)
            if(error){
                return reply.response(Response.sendResponse(false, error.output.payload.message, ResponseMessage.BAD_REQUEST, StatusCode.BAD_REQUEST)).takeover();
            }else{
                return reply.response(Response.sendResponse(false, null, ResponseMessage.INTERNAL_SERVER_ERROR, StatusCode.INTERNAL_SERVER_ERROR)).takeover();
            }
        }
    }
})