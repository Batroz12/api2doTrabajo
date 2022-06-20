const boom = require('@hapi/boom');

function controlValidar(schema,objecto){
  return (req,res,next)=>{
    const data = req[objecto];
    const {error} = schema.validate(data);
    if(error){
      throw boom.badRequest(error)
    }
    next();
  };  
}

module.exports = controlValidar
