'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export const DonationOptions = () => {
  // substituir pela variavel global
  const [donationValue, setDonationValue] = useState<null | number>(null)

  const [inputOtherValue, setInputOtherValue] = useState<string>("")
  const buttonOptions = [20, 50 ,100, 150]
  const router = useRouter()

  const handleSelect = (option: number) => {
    const isSame = donationValue === option
    setDonationValue(isSame ? null : option)
    setInputOtherValue("")
  }

  const handleKeyInteraction = (e: React.KeyboardEvent, option: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect(option)
    }
  }

  const handleInputChange = (value: string) => {
    setInputOtherValue(value)
    setDonationValue(Number(value))
  }

  return (
  <section className='flex flex-col items-center justify-center w-full gap-[40px]  
  bg-[#FAF6FE] tablet:bg-[#fff] tablet:rounded-[16px] 
  tablet:py-[16px] tablet:px-[32px] desktop:py-[24px] 
  tablet:w-[80%] desktop:w-[60%]'>
    <h2 className="text-[24px] text-[#663198] font-semibold">
      Escolha o valor da sua doação
    </h2>
    <span className='flex flex-col tablet:flex-row gap-4'>
      {buttonOptions.map((option)=>{
        const isChecked = donationValue === option
        return(
        <label 
        className={`cursor-pointer relative flex justify-center items-center 
        w-full tablet:w-fit 
        rounded-[8px] py-[16px] px-[20px] border-2 
        active:bg-[#D6BDF5] focus:outline-[#54287B] focus:outline focus:outline-2
        ${donationValue === option ?
          'border-[#823DC7] bg-[#823DC7]' 
          : 
          'border-[#D6BDF5] bg-[#ffff] hover:bg-[#F2EBFC]'}`}
        key={option} 
        htmlFor={`option-donationValue-${option}`}
        tabIndex={0}
        aria-label={`Doar ${option} reais`}
        role="checkbox"
        aria-checked={isChecked}
        onKeyDown={(e) => handleKeyInteraction(e, option)}>
          <input 
          tabIndex={-1}
          className="sr-only"
          type="checkbox"
          value={option}
          checked={isChecked}
          onChange={() => handleSelect(option)}
          id={`option-donationValue-${option}`}/>
          <span className={`w-fit font-semibold flex items-center justify-center
          ${donationValue === option ? 'text-[#FAF6FE]' : 'text-[#54287B]'}`}>
            {`R$ ${option}`}
          </span>
        </label>)}
      )}
      <input 
      type="number"
      placeholder="Outro valor"
      value={inputOtherValue}
      step={'0.01'}
      onKeyDown={
        (e)=>{
          if((e.key === 'Enter' || e.key === ' ') && inputOtherValue === ""){ 
            setDonationValue(null)}}}
      onClick={() => setDonationValue(null)}
      onChange={(e) => handleInputChange(e.target.value)}
      className={`flex items-center justify-center w-[120px] rounded-[8px] border-2 py-[16px] px-[8px] 
      font-semibold text-[#5F5764] text-center
      focus:outline-[#823DC7] hover:bg-[#F2EBFC] 
      ${buttonOptions.includes(donationValue as number) ? 
        'border-[#A5A1A8] bg-[#CCC]' 
        : donationValue === null ? 
          'border-[#D6BDF5] bg-[#FFF]'
          :
          'border-[#A468E4] bg-[#FFF]'}`}
      readOnly={buttonOptions.includes(donationValue as number)}/>
    </span>
    <button
    className="bg-[#823DC7] w-[240px] px-[20px] py-[16px] rounded-[8px] cursor-pointer 
    text-[#FFF] text-[20px] font-semibold 
    disabled:bg-[#CCC] disabled:text-[#A5A1A8]" 
    type='button'
    disabled={donationValue === null}
    onClick={()=> {router.push('/quero-doar/metodos')}}>
      Continuar
    </button>
  </section>)
}