import * as yup from "yup";

const getAdults = () => {
  const nowadays = new Date();
  nowadays.setFullYear(nowadays.getFullYear() - 18);
  nowadays.setMonth(0);
  nowadays.setDate(1);
  nowadays.setHours(0);
  nowadays.setMinutes(0);
  nowadays.setSeconds(0);
  return nowadays;
};

export interface SchemaDonationProps {
  name: string;
  date: number;
  phone: number;
  email: string;
  availability: string;
  interestArea: string;
  message: string;
}

export const schemaDonation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório").min(3).max(25),
  date: yup
    .date()
    .required("A data de nascimento é obrigatória")
    .typeError("Por favor, insira uma data válida")
    .max(
      getAdults() || new Date(),
      "Você deve ter mais de 18 anos e a data não pode ser no futuro"
    )
    .min(new Date(1950, 1, 1), "A data não pode ser antes de 1950"),

  phone: yup.string().required("O telefone é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório")
    .typeError("Digite um email válido"),
  availability: yup.string().required("A disponibilidade é obrigatória"),
  interestArea: yup.string().required("A área de interesse é obrigatória"),
  message: yup.string().required("Mensagem é obrigatória"),
});
