'use client'

import { schemaTalkToUs, SchemaTalkToUsProps } from "@/model/schemas/schemaTalkToUs";
import { yupResolver } from "@hookform/resolvers/yup";
import { resolve } from "path"; // remover importações não usadas
import { useState } from "react";
import { useForm } from "react-hook-form";

const TalkToUsForm = () => {

    //sugestão de melhoria : Modularize a lógica de envio em um hook para melhorar a manutenibilidade, testabilidade e clareza do código, tornando o componente TalkToUsForm mais simples e focado apenas na renderização.

    const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null)
    const [showFormMessages, setShowFormMessages] = useState<boolean>(false)

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: {
            errors, 
            isSubmitting, 
            isSubmitSuccessful, 
            isSubmitted
        } 
    } = useForm<SchemaTalkToUsProps>({
        resolver: yupResolver(schemaTalkToUs)
    })
    const onSubmit = async (data: SchemaTalkToUsProps) => {
        //TODO enviar dados para a API

        setFormErrorMessage(null)
        setShowFormMessages(false)

        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(data)

            reset()
            setShowFormMessages(true)
            setTimeout(() => setShowFormMessages(false), 3000)
        } catch(error) {
            setFormErrorMessage("Ocorreu um erro ao enviar o formulário")
            setShowFormMessages(true)
            setTimeout(() => setShowFormMessages(false), 3000)
        }

    }
    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-[551px] space-y-4 lg:space-y-10 mt-8 lg:mt-0"> 
            <fieldset>
                <div>
                    <label htmlFor="name" className="font-roboto text-sm font-semibold">
                        Nome completo
                        <span className="text-red-500">*</span>
                    </label>
                    
                </div>
                <input id="name" {...register("name")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] lg:h-12 mt-2 pl-3 placeholder:text-xs placeholder:lg:text-base   " placeholder="Digite seu nome" />
                {errors.name && <span className="text-red-500 text-xs">{errors.name?.message}</span>}
            </fieldset>   

            <fieldset>
                <div>
                    <label htmlFor="email" className="font-roboto text-sm font-semibold">
                        E-mail
                        <span className="text-red-500">*</span>
                    </label>                      
                </div>
                <input id="email" {...register("email")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] lg:h-12 mt-2 pl-3 placeholder:text-xs placeholder:lg:text-base " placeholder="Digite seu email" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email?.message}</span>}
            </fieldset>  

            <fieldset>
                <div>
                    <label htmlFor="message" className="font-roboto text-sm font-semibold">
                        Mensagem
                        <span className="text-red-500">*</span>
                    </label>
                </div>
                <textarea id="message" {...register("message")} className="border-2 border-[#482E98] w-full rounded-lg mt-2 min-h-40 max-h-96 p-3 placeholder:text-xs placeholder:lg:text-base  " placeholder="Escreva sua mensagem..." />
                {errors.message && <span className="text-red-500 text-xs">{errors.message?.message}</span>}
            </fieldset>   

            <div className="flex">
                <button disabled={isSubmitting} type="submit" className="bg-[#482E98] text-white-normal mx-auto min-h-12 rounded-lg px-8 disabled:opacity-50 disabled:cursor-progress">
                    {
                        isSubmitting ? "Enviando" : "Enviar mensagem"
                    }
                </button>
            </div>
            {
                isSubmitted && showFormMessages && (
                    <div>
                        {
                            isSubmitSuccessful && (
                                <span className="text-green-500 text-sm font-roboto">Mensagem enviada com sucesso!</span>
                            )
                        }
                        {
                            formErrorMessage && (
                                <span className="text-red-500 text-sm font-roboto">{formErrorMessage}</span>
                            )
                        }
                    </div>
                )
            }
        </form>
     );
}
 
export default TalkToUsForm;