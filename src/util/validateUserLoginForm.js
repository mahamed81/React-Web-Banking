export const validateUserLoginForm =(values)=>{
  const error = {}
  if(!values.username){
    error.username = 'Required'
  }
  if(!values.password){
    error.password = 'Required'
  }

  if(values.username.length <3 ){
    error.username = 'username must be 6 characters long'
  }else if(values.username.length > 15){
    error.username = 'username must be less than 15 characters long'
  }
  if(values.password.length <3){
    error.password = 'password must at least 8 characters long'
  }

  return error;
}