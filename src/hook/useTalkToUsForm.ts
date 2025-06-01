import { schemaTalkToUs, SchemaTalkToUsProps } from "@/model/schemas/schemaTalkToUs"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation';


export const useTalkToUsForm = () => {
    
    //sugestão de melhoria : Modularize a lógica de envio em um hook para melhorar a manutenibilidade, testabilidade e clareza do código, tornando o componente TalkToUsForm mais simples e focado apenas na renderização.

    const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false)
    const router = useRouter()

    const formMethods = useForm<SchemaTalkToUsProps>({
        resolver: yupResolver(schemaTalkToUs)
    })

    const onSubmit = async (data: SchemaTalkToUsProps) => {

        setFormErrorMessage(null)
        setShowFormMessages(false)

    // o formsubmit permite que ao invés de utilizar diretamente o email,
    // se utilize uma string que a ferramenta disponibiliza mas para isso
    // é necessário que a ADM faça a confirmação dda geração dessa key
    // pelo email dela
    const OWNER_EMAIL_KEY = process.env.NEXT_PUBLIC_OWNER_EMAIL_KEY

        try {
            const configEmailData = new FormData()
            configEmailData.append("Nome", data.name)
            configEmailData.append("Email", data.email)
            configEmailData.append("Mensagem", data.message)
            configEmailData.append("_captcha", "false")
            configEmailData.append("_subject", "Mensagem - Formulário Fale Conosco")
            configEmailData.append("_template", "box")

            await fetch(`https://formsubmit.co/${OWNER_EMAIL_KEY}`, {
            method: "POST",
            headers: { 
                'Accept': 'application/json'
            },
            body: configEmailData
            })
            .then(() => router.push('/mensagem-enviada'))
            .catch(error => { throw new Error(error)});

            formMethods.reset()
            setShowFormMessages(true)
            setTimeout(() => setShowFormMessages(false), 3000)
        } catch(error) {
            setFormErrorMessage("Ocorreu um erro ao enviar o formulário")
            setShowFormMessages(true)
            setTimeout(() => setShowFormMessages(false), 3000)
        }

    }
    return {
        ...formMethods,
        onSubmit,
        formErrorMessage,
        showFormMessages
    }
}