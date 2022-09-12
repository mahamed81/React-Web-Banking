import {
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setTransfer, selectTransfer } from "./tansferSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Forms = () => {
  const dispatch = useDispatch();
  const select  = useSelector(selectTransfer)
const handleLogin = (values) => {
        const transferInput = {
          name: values.name,
          amount: values.amount
        }
        dispatch(setTransfer(transferInput))
};
  console.log("TransferInput " + select)

  return (
  
    <div className="operation operation--transfer">
        <h2>Transfer money</h2>
      <Formik initialValues = {{name: '',  amount: ''}} onSubmit ={handleLogin}
       >
     <Form className="form form--transfer">
      <FormGroup>
        <Field id= 'name'name='name' className='form-control form__input form__input--to'
        />
        <ErrorMessage name="name">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
      </FormGroup>
      <FormGroup>
        <Field  id= 'amount'name='number' className='form-control form__input form__input--amount'/>
        <ErrorMessage name="amount">
            {(msg) => <p className="text-danger">{msg}</p>}
          </ErrorMessage>
      </FormGroup>
      <Button type='submit' className = 'form__btn form__btn--transfer' color='primary'>&rarr;</Button>
      <Label htmlFor='name'>Tranfer to</Label>
      <Label htmlFor='amount'>Amount</Label>

      </Form> 

  </Formik>
    </div>
  );
}


export default Forms;
