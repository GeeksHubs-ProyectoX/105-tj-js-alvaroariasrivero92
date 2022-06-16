function repetidos(inputs){
  let result = inputs.filter((element,index)=>{
    return inputs.indexOf(element) === index;
  });
  return result;
}

module.exports = repetidos;
