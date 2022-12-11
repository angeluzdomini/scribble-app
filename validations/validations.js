const joi = require('joi')

const registerValidation = (data) => {
    const schemaValidation = joi.object({
        firstName:joi.string().required().min(3).max(256),
        lastName:joi.string().required().min(3).max(256),
        email:joi.string().required().min(6).max(256).email(),
        password:joi.string().required().min(6).max(1024)        
    })
    return schemaValidation.validate(data)
}

const loginValidation = (data) => {
    const schemaValidation = joi.object({
        email:joi.string().required().min(6).max(256).email(),
        password:joi.string().required().min(6).max(1024)        
    })
    return schemaValidation.validate(data)
}

const scribbleValidation = (data) => {
    const schemaValidation = joi.object({
        title:joi.string().required().min(4).max(256),
        description:joi.string().required().min(6).max(1024),       
    })
    return schemaValidation.validate(data)
}

const commentValidation = (data) => {
    const schemaValidation = joi.object({
        comment:joi.string().required().min(4).max(1024)        
    })
    return schemaValidation.validate(data)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.scribbleValidation = scribbleValidation
module.exports.commentValidation = commentValidation