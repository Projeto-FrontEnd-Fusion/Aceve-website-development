import * as yup from "yup";

export interface SchemaBeVolunteerProps {
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  availability: string;
  interestArea: string;
  message: string;
}

export const schemaBeVolunteer = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres!")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  dateOfBirth: yup
    .date()
    .required("A data de nascimento é obrigatória")
    .max(new Date(), "A data nao pode ser no futuro"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O Email é obrigatório")
    .typeError("Digite um email válido"),
  phone: yup
    .string()
    .min(11, "O telefone deve ter pelo menos 11 caracteres!")
    .max(11, "O telefone deve ter no máximo 11 caracteres")
    .required("O telefone é obrigatório"),
  availability: yup
    .array()
    .of(yup.string().oneOf(["morning", "afternoon", "evening", "flexible"]))
    .required("A disponibilidade é obrigatória"),
  interestArea: yup.string().required("A área de interesse é obrigatória"),
  message: yup
    .string()
    .required("A mensagem é obrigatória")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres!")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});
