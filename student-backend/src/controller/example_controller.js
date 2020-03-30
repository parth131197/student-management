const ExampleValidation   =  require('../validations/example_validation'),
      ExampleFactory      =  require('../factory/example_factory'),
      Response            =  require('../utils/response'),
      Joi                 =  require('@hapi/joi'),
      pgClient            =  require('../servers/postgres_server');
       

const response_format = Joi.object({
		is_success: Joi.boolean().required(),
		result: Joi.any().optional(),
		message: Joi.string().required(),
		status_code: Joi.number().required(),
	}),
	response = {
		status: {
			200: response_format,
			201: response_format,
			400: response_format,
			500: response_format,
		},
    };
    
// exports.getAllComments = {
//     description: "GET example: Get all commemts",
//     tags: ['api','static'],
//     plugins: {
// 		"hapi-swaggered": {
// 			responses: Response.responses,
// 		},
//     },
//     validate: ExampleValidation.getComments,
//     handler: async(request, h)=>{
//       const { rows } = await pgClient.query('SELECT * FROM student;');
//       console.log("DB response:",rows);
//         return ExampleFactory.getAllComments(request, h);
//     },
//     response
// }

// exports.addComment = {
//     description: "POST example: Add a comment",
//     tags: ['api', 'static'],
//     plugins: {
// 		"hapi-swaggered": {
// 			responses: Response.responses,
// 		},
//     },
//     validate: ExampleValidation.addComment,
//     handler: (request, h)=>{
//         return ExampleFactory.addComment(request, h);
//     },
//     response
// }


exports.getAllStudentsList = {
  description: "Gets the list of all the students",
  tags: ['api','students'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    // validate: ExampleValidation.addComment,
    handler: (request, h)=>{
        return ExampleFactory.getAllStudentsList(request, h);
    },
    response
}
exports.getStudent = {
  description: "Gets a particular student",
  tags: ['api','students'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    validate: ExampleValidation.getStudent,
    handler: (request, h)=>{
        return ExampleFactory.getStudent(request, h);
    },
    response
}
exports.addStudent = {
  description: "Adds a particular student",
  tags: ['api','students'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    validate: ExampleValidation.addStudent,
    handler: (request, h)=>{
        return ExampleFactory.addStudent(request, h);
    },
    response
}
exports.deleteStudent = {
  description: "Deletes a particular student",
  tags: ['api','students'],
  plugins: {
		"hapi-swaggered": {
			responses: Response.responses,
		},
    },
    validate: ExampleValidation.getStudent,
    handler: (request, h)=>{
        return ExampleFactory.deleteStudent(request, h);
    },
    response
}


