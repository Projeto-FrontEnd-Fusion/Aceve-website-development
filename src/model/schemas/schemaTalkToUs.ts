import * as yup from "yup"

export interface SchemaTalkToUsProps {
    name: string
    email: string
    message: string
}

export const schemaTalkToUs = yup.object().shape({
    name: yup.string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres!")
        .max(50, "O nome deve ter no máximo 50 caracteres"),
    email: yup
        .string()
        .email("Digite um email válido")
        .required("O Email é obrigatório")
        .typeError("Digite um email válido"),
    message: yup.string()
        .required("A mensagem é obrigatória")
        .min(40, "A mensagem deve ter pelo menos 40 caracteres!")
        .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});