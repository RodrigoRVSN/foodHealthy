import { WelcomeDiv, Back } from "./styles";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ButtonBody } from "../../components/Button/styles";

export default function WelcomePage() {


  /* Verifica se o submit bate com o de algum usuário */

  const history = useHistory();

  const submitted = () => {
    toast.success('😎');
    history.push('/');
  }


  let contador = localStorage.getItem('iteracaoLogin');
  const [cookies] = useCookies(['healthy']);

  return (
    <>
      <Back>

        <WelcomeDiv>

          <h2> Hello {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].name).replace(/["]/g, ''))}!</h2>
          <h2>Birth date: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].date).replace(/["]/g, ''))}</h2>
          <h2>CEP: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].cep).replace(/["]/g, ''))}</h2>
          <h2>CPF: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].cpf).replace(/["]/g, ''))}</h2>
          <h2>State: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].state).replace(/["]/g, ''))}</h2>
          <h2>Street: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].street).replace(/["]/g, ''))}</h2>
          <h2>City: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].city).replace(/["]/g, ''))}</h2>
          <h2>District: {(contador === null) ? '' : (JSON.stringify(cookies[`healthy${contador}`].district).replace(/["]/g, ''))}</h2>

        </WelcomeDiv>

        <ToastContainer />
        <ButtonBody type="submit" onClick={submitted}>BACK TO HOME</ButtonBody>
      </Back>
    </>
  );
}

