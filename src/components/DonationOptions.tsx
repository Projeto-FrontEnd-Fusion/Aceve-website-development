'use client'
import { ChangeEvent, useEffect, useState } from "react"

export const DonationOptions = () => {
  const [donationValue, setDonationValue] = useState<null | number>(null)
  const [inputOtherValue, setInputOtherValue] = useState<string>("")

  const buttonOptions = [20, 50 ,100, 150]

  function handleOptionSelect(e:ChangeEvent<HTMLInputElement>, option: number){
    const {checked} = e.currentTarget
    setInputOtherValue("")
    if(!checked){
      setDonationValue(null)
      return
    } else if (donationValue === option){
      e.preventDefault()
      return
    }
    setDonationValue(option)
  }

  function handleLabelSelect(el: HTMLElement){
    const child = el.querySelector('input') as HTMLInputElement | null
    if(child){
      const currentValue = child.checked
      if(currentValue){
        setDonationValue(null)
      }else{
        setDonationValue(Number(child.value))
      }
      child.checked = !currentValue
      setInputOtherValue("")
    }
  }
  function handleLabelClick(e: React.MouseEvent<HTMLLabelElement>){
    handleLabelSelect(e.currentTarget)
  }
  function handleLabelEnter(e: React.KeyboardEvent<HTMLLabelElement>){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault()
      handleLabelSelect(e.currentTarget)
    }
  }

  function handleInputOtherValue(newDonationValue: string){
    setInputOtherValue(newDonationValue)
    setDonationValue(Number(newDonationValue))
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
      {buttonOptions.map((option)=>
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
        onClick={(e)=> handleLabelClick(e)}
        onKeyDown={(e)=> handleLabelEnter(e)}>
          <input 
          tabIndex={-1}
          className="sr-only"
          type="checkbox"
          value={option}
          checked={option === donationValue}
          id={`option-donationValue-${option}`}
          onChange={(e) => handleOptionSelect(e, option)}/>
          <span className={`w-fit font-semibold flex items-center justify-center
          ${donationValue === option ? 'text-[#FAF6FE]' : 'text-[#54287B]'}`}>
            {`R$ ${option}`}
          </span>
        </label>
      )}
      <input 
      type="number"
      placeholder="Outro valor"
      value={inputOtherValue}
      step={'0.01'}
      onClick={() => setDonationValue(null)}
      onChange={(e) => handleInputOtherValue(e.target.value)}
      className={`flex items-center justify-center w-[110px] rounded-[8px] border-2 py-[16px] px-[8px] 
      text-semibold text-[#5F5764] text-center
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
    className="bg-[#823DC7] w-[240px] px-[20px] py-[16px] rounded-[8px] text-[#FFF] 
    disabled:bg-black"
    type='button'
    disabled={donationValue === null}>
      Continuar
    </button>
  </section>)
}