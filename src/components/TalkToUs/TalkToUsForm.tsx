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

    return ( 
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-[551px] space-y-4 lg:space-y-10 mt-8 lg:mt-0"> 
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
                <input id="email" {...register("email")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] lg:h-12 mt-2 pl-3 placeholder:text-xs placeholder:lg:text-base " placeholder="Digite seu email"/>
                {errors.email && <span className="text-red-500 text-xs">{errors.email?.message}</span>}
            </fieldset>  

            <fieldset>
                <div>
                    <label htmlFor="message" className="font-roboto text-sm font-semibold">
                        Mensagem
                        <span className="text-red-500">*</span>
                    </label>
                </div>
                <textarea id="message" {...register("message")} className="border-2 border-[#482E98] w-full rounded-lg mt-2 min-h-40 max-h-96 p-3 placeholder:text-xs placeholder:lg:text-base  " placeholder="Escreva sua mensagem..."/>
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
                            isSubmitSuccessful && !formErrorMessage && (
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