import { CadastroBox, Back, CadastroRow, Button } from "./styles";
import { Formik, Field, Form } from 'formik';
import schema from '../../schema';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function CadastroPage() {

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

  /* Validação do CEP */
  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, ''); // Substitui o que não for numero por um espaço vazio
    if (cep?.length !== 8) {
      toast.error('CEP should contain 8 digits');
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`) // busca api do viacep dinamicamente
      .then((res) => res.json())
      .then((data) => {
        toast.success('CEP VÁLIDO');
        setFieldValue('city', data.localidade)
        setFieldValue('street', data.logradouro)
        setFieldValue('state', data.uf)
        setFieldValue('district', data.bairro)
      })
  }

  /* Armazenamento de cookies e local storage */
  const history = useHistory(); // usa histórico para dar um push ao dar submit
  let contador = (localStorage.getItem('cont') === null) ? 0 : Number(localStorage.getItem('cont')); //verifica se existe contador no ls

  const [cookies, setCookie] = useCookies([`healthy${contador}`]);

  const submitted = (values) => {
    contador = contador + 1;
    localStorage.setItem('cont', contador); // Armazena o contador que irá iterar no local storage

    setCookie(`healthy${contador}`, values, { path: '/' }); // Armazena os cookies dos valores

    localStorage.setItem(`ls${contador}`, JSON.stringify(values)); // armazena no local storage os valores
    JSON.parse(localStorage.getItem(`ls${contador}`));  // pega o endereço do local storage conforme o contador
    history.push("/login");   // manda pra tela de login 
  }


  /* Renderização da página */

  return (
    <>
      <Back src='https://cdn.pixabay.com/photo/2020/06/12/07/19/black-background-5289466_1280.jpg' alt='fruits' />
      <CadastroBox>
        <Formik
          validationSchema={schema}
          validateOnMount
          initialValues={{
            name: '',
            date: '',
            cpf: '',
            cep: '',
            state: '',
            street: '',
            city: '',
            district: '',
          }}
          render={({ isValid, setFieldValue, values }) => (
            <Form>
              <h2><span>REGISTER</span></h2>
              <CadastroRow>
                <label>NAME</label>
                <Field name='name' type="text" placeholder='NAME' />
                <label>BIRTHDATE</label>
                <Field name='date' type='date' placeholder='BIRTHDATE' />
              </CadastroRow>
              <CadastroRow>
                <label>CPF</label>
                <Field name='cpf' type='password' placeholder='CPF (**********)' onBlur={(ev) => onBlurCpf(ev, setFieldValue)} />
                <label>CEP</label>
                <Field name='cep' type='number' placeholder='CEP (********)' onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                <label>STATE</label>
                <Field name='state' type='text' placeholder='STATE (UF)' />
              </CadastroRow>
              <CadastroRow>
                <label>STREET</label>
                <Field name='street' type='text' placeholder='STREET' />
              </CadastroRow>
              <CadastroRow>
                <label>CITY</label>
                <Field name='city' type='text' placeholder='CITY' />
                <label>DISTRICT</label>
                <Field name='district' type='text' placeholder='DISTRICT' />
              </CadastroRow>


              <ToastContainer />
              <Button type="submit" onClick={() => submitted(values)} disabled={!isValid} >REGISTER</Button>

              <a href="/login"><h3>I has a account!</h3></a>
            </Form>
          )}
        />
      </CadastroBox>
    </>
  );
}

