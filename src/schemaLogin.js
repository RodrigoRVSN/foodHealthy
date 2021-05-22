import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required(),
  cpf: Yup.string().min(11).required(),
});