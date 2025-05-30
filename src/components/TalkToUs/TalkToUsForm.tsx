'use client'

import { useTalkToUsForm } from "@/hook/useTalkToUsForm";

const TalkToUsForm = () => {
    const {
       register, 
       onSubmit, 
       handleSubmit,
       formState: {
        errors,
        isSubmitted,
        isSubmitting,
        isSubmitSuccessful
       },
       showFormMessages,
       formErrorMessage
    } = useTalkToUsForm()

    // o formsubmit permite que ao invés de utilizar diretamente o email,
    // se utilize uma string que a ferramenta disponibiliza mas para isso
    // é necessário que a ADM faça a confirmação dda geração dessa key
    // pelo email dela
    const OWNER_EMAIL_KEY = process.env.NEXT_PUBLIC_OWNER_EMAIL_KEY

    return ( 
        <form
        className="mx-auto w-full max-w-[551px] space-y-4 lg:space-y-10 mt-8 lg:mt-0"
        action={`https://formsubmit.co/${OWNER_EMAIL_KEY}`}
        method="POST"
        target='_blank'> 
            <fieldset>
                <div>
                    <label htmlFor="name" className="font-roboto text-sm font-semibold">
                        Nome completo
                        <span className="text-red-500">*</span>
                    </label>
                    
                </div>
                <input id="name" {...register("name")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] lg:h-12 mt-2 pl-3 placeholder:text-xs placeholder:lg:text-base   " placeholder="Digite seu nome" 
                name='Nome'/>
                {errors.name && <span className="text-red-500 text-xs">{errors.name?.message}</span>}
            </fieldset>   

            <fieldset>
                <div>
                    <label htmlFor="email" className="font-roboto text-sm font-semibold">
                        E-mail
                        <span className="text-red-500">*</span>
                    </label>                      
                </div>
                <input id="email" {...register("email")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] lg:h-12 mt-2 pl-3 placeholder:text-xs placeholder:lg:text-base " placeholder="Digite seu email" 
                name='Email'/>
                {errors.email && <span className="text-red-500 text-xs">{errors.email?.message}</span>}
            </fieldset>  

            <fieldset>
                <div>
                    <label htmlFor="message" className="font-roboto text-sm font-semibold">
                        Mensagem
                        <span className="text-red-500">*</span>
                    </label>
                </div>
                <textarea id="message" {...register("message")} className="border-2 border-[#482E98] w-full rounded-lg mt-2 min-h-40 max-h-96 p-3 placeholder:text-xs placeholder:lg:text-base  " placeholder="Escreva sua mensagem..." 
                name="Mensagem"/>
                {errors.message && <span className="text-red-500 text-xs">{errors.message?.message}</span>}
            </fieldset>   

            <input type="hidden" name="_subject" value="Mensagem - Formulário Fale Conosco"></input>
            <input type="hidden" name="_template" value="box"></input>

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