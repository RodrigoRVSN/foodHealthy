import { LoginBox, Back, Button } from "./styles";
import { Formik, Field, Form } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import schemaLogin from "../../schemaLogin";

export default function LoginPage() {

  /* Essa função valida o cpf e troca os caracteres especiais (ponto, hífen) por números. */
  function onBlurCpf(ev, setFieldValue) {
    const { value } = ev.target;
    const cpf = value?.replace(/[^0-9]/g, ''); // Substitui o que não for numero por um espaço vazio (regex)
    if (cpf?.length !== 11) {
      toast.error('CPF should contain 11 digits');
      return;
    }
    setFieldValue('cpf', cpf)
  }

  /* Verifica se o submit bate com o de algum usuário */

  const history = useHistory();

  const submitted = (values) => {
    let incremento = localStorage.getItem('cont');
    for (let i = 1; i <= incremento; i++) {
      let valorLs = JSON.parse(localStorage.getItem(`ls${i}`));
      if (valorLs.name === values.name) {
        if (valorLs.cpf === values.cpf) {
          localStorage.setItem('iteracaoLogin', i);
          history.push('/welcome');
        }
      }
    }
    toast.error('User not found');
  }

  return (
    <>
      <Back src='https://cdn.pixabay.com/photo/2018/09/30/00/38/food-3712592_1280.jpg' alt='fruits' />
      <LoginBox>
        <Formik
          validationSchema={schemaLogin}
          validateOnMount
          initialValues={{
            name: '',
            cpf: '',
          }}
          render={({ isValid, setFieldValue, values }) => (
            <Form>
              <h2><span>LOGIN</span></h2>
              <label>NAME</label>
              <Field name='name' type="text" placeholder='NAME' />

              <label>CPF</label>
              <Field name='cpf' type='password' placeholder='CPF (**********)' onBlur={(ev) => onBlurCpf(ev, setFieldValue)} />

              <ToastContainer />
              <Button type="submit" onClick={() => submitted(values)} disabled={!isValid} >LOGIN</Button>
              <a href="/cadastro"><h3>Don't have a account?</h3></a>
            </Form>
          )}
        />
      </LoginBox>
    </>
  );
}

