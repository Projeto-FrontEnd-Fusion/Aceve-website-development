'use client'
import { ChangeEvent, useEffect, useState } from "react"

export const DonationOptions = () => {
  const [donationValue, setDonationValue] = useState<null | number>(null)
  const [inputOtherValue, setInputOtherValue] = useState<string>("")

  const buttonOptions = [20, 50 ,100, 150]
  
  useEffect(()=>{
    console.log(donationValue)
  })

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

  function handleInputOtherValue(newDonationValue: string){
    setInputOtherValue(newDonationValue)
    setDonationValue(Number(newDonationValue))
  }

  return (<>
    <div>
      {buttonOptions.map((option)=>
        <label key={option} 
        htmlFor={`option-donationValue-${option}`}>
          <input type="checkbox"
          value={option}
          checked={option === donationValue}
          id={`option-donationValue-${option}`}
          onChange={(e) => handleOptionSelect(e, option)}/>
          {`R$ ${option}`}
        </label>
      )}
      <input type="number"
      placeholder="Outro valor"
      value={inputOtherValue}
      step={'0.01'}
      onClick={() => setDonationValue(null)}
      onChange={(e) => handleInputOtherValue(e.target.value)}
      readOnly={buttonOptions.includes(donationValue as number)}/>
    </div>
  </>)
}