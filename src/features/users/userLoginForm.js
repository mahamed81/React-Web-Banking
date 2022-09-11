import { validateUserLoginForm } from "../../util/validateUserLoginForm";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice"
import { ACCOUNTS } from "../../app/shared/accounts";
import {
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const UserLoginForm = () => {
  const currUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch();
let currentAccount 
const handleLogin = (values) => {

 currentAccount =  ACCOUNTS.find((acc)=>acc.name===values.username && acc.pin === Number(values.password))
  dispatch(setCurrentUser(currentAccount));
};


  
  return (
    <Formik initialValues = {{username: '',  password: ''}} onSubmit ={handleLogin}
    validate = {validateUserLoginForm}
  >
     <Form>
      <FormGroup>
        <Label htmlFor='username'>Username</Label>
        <Field id= 'username'name='username' placeholder='Username'className='form-control'
        />
        <ErrorMessage name="username">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
      </FormGroup>
      <FormGroup>
        <Label htmlFor='password'>Password</Label>
        <Field  id= 'password'name='password' placeholder='Password'className='form-control'/>
        <ErrorMessage name="password">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
      </FormGroup>
      <Button type='submit' color='primary'>Login</Button>

      </Form> 

  </Formik>
  );
}

export default UserLoginForm;
