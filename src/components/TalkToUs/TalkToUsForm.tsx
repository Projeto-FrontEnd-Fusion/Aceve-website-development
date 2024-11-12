'use client'

import { schemaTalkToUs, SchemaTalkToUsProps } from "@/model/schemas/schemaTalkToUs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const TalkToUsForm = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<SchemaTalkToUsProps>({
        resolver: yupResolver(schemaTalkToUs)
    })
    const onSubmit = (data: SchemaTalkToUsProps) => console.log(data)

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 mt-8"> 
            <fieldset>
                <div>
                    <label htmlFor="name" className="font-roboto text-sm font-semibold">
                        Nome completo
                        <span className="text-red-500">*</span>
                    </label>
                    
                </div>
                <input id="name" {...register("name")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] mt-2 pl-3 placeholder:text-xs" placeholder="Digite seu nome" />
                {errors.name && <span className="text-red-500 text-xs">{errors.name?.message}</span>}
            </fieldset>   

            <fieldset>
                <div>
                    <label htmlFor="email" className="font-roboto text-sm font-semibold">
                        E-mail
                        <span className="text-red-500">*</span>
                    </label>                      
                </div>
                <input id="email" {...register("email")} className="border-2 border-[#482E98] w-full rounded-lg min-h-[38px] mt-2 pl-3 placeholder:text-xs" placeholder="Digite seu email" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email?.message}</span>}
            </fieldset>  

            <fieldset>
                <div>
                    <label htmlFor="message" className="font-roboto text-sm font-semibold">
                        Mensagem
                        <span className="text-red-500">*</span>
                    </label>
                </div>
                <textarea id="message" {...register("message")} className="border-2 border-[#482E98] w-full rounded-lg mt-2 min-h-40 p-3 placeholder:text-xs" placeholder="Escreva sua mensagem..." />
                {errors.message && <span className="text-red-500 text-xs">{errors.message?.message}</span>}
            </fieldset>   

            <div className="flex">
                <button type="submit" className="bg-[#482E98] text-white-normal mx-auto min-h-12 rounded-lg px-8">Enviar mensagem</button>
            </div>
        </form>
     );
}
 
export default TalkToUsForm;