import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required(),
  date: Yup.date().required(),
  cpf: Yup.string().min(11).required(),
  cep: Yup.string().min(8).required(),
  street: Yup.string().min(2).required(),
  city: Yup.string().min(2).required(),
  district: Yup.string().min(1).required(),
});