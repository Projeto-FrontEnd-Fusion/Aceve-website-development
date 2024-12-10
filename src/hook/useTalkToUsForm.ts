import { schemaTalkToUs, SchemaTalkToUsProps } from "@/model/schemas/schemaTalkToUs"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const useTalkToUsForm = () => {
    
    //sugestão de melhoria : Modularize a lógica de envio em um hook para melhorar a manutenibilidade, testabilidade e clareza do código, tornando o componente TalkToUsForm mais simples e focado apenas na renderização.

    const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false)

    const formMethods = useForm<SchemaTalkToUsProps>({
        resolver: yupResolver(schemaTalkToUs)
    })

    const onSubmit = async (data: SchemaTalkToUsProps) => {
        //TODO enviar dados para a API

        setFormErrorMessage(null)
        setShowFormMessages(false)

        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(data)

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