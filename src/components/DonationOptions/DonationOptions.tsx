'use client'
import { Dispatch, useState } from "react"
import { useRouter } from 'next/navigation'
import { useDonationStore } from "@/zustand-store/donationvalue.store"
import { parseCurrencyInput } from "@/utils/formatCurrencyInput";

interface IDonationState {
  donationValue: number | null
  setDonationValue: (value: number | null) => void
  setInputOtherValue: Dispatch<React.SetStateAction<string>>
}

interface IFixedValueProps extends IDonationState {
  option: number
}

const FixedValue = ({ donationValue, option, setDonationValue, setInputOtherValue }: IFixedValueProps) => {
  const isChecked = donationValue === option;

  const handleToggleSelection = (value: number) => {
    const isSame = donationValue === value;
    setDonationValue(isSame ? null : value);
    setInputOtherValue("");
  };

  const handleKeyboardToggle = (e: React.KeyboardEvent, value: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleSelection(value);
    }
  };

  const selectedStyles = {
    background: isChecked
      ? 'border-[#823DC7] bg-[#823DC7]'
      : 'border-[#D6BDF5] bg-[#ffff] hover:bg-[#F2EBFC]',
    text: isChecked ? 'text-[#FAF6FE]' : 'text-[#54287B]',
  };

  return (
    <label
      className={`
        cursor-pointer relative flex justify-center items-center 
        w-full tablet:w-fit 
        rounded-[8px] py-[16px] px-[20px] border-2 
        active:bg-[#D6BDF5] focus:outline-[#54287B] focus:outline focus:outline-2
        ${selectedStyles.background}
      `}
      key={option}
      htmlFor={`option-donationValue-${option}`}
      tabIndex={0}
      aria-label={`Doar ${option} reais`}
      role="checkbox"
      aria-checked={isChecked}
      onKeyDown={(e) => handleKeyboardToggle(e, option)}
    >
      <input
        tabIndex={-1}
        className="sr-only"
        type="checkbox"
        value={option}
        checked={isChecked}
        onChange={() => handleToggleSelection(option)}
        id={`option-donationValue-${option}`}
      />
      <span
        className={`
          w-fit font-semibold flex items-center justify-center
          ${selectedStyles.text}
        `}
      >
        {`R$ ${option}`}
      </span>
    </label>
  );
};

interface ICustomValueProps extends IDonationState {
  buttonOptions: number[]
  inputOtherValue: string
}


const CustomValue = ({ buttonOptions, donationValue, inputOtherValue, setDonationValue, setInputOtherValue }: ICustomValueProps) => {

  const handleInputChange = (rawInput: string) => {
    const numericValue = parseCurrencyInput(rawInput);

    if (numericValue !== null) {
      setInputOtherValue(`R$${numericValue}`);
      setDonationValue(numericValue);
    }
  };

  const handleReset = () => {
    setDonationValue(null);
    setInputOtherValue('R$');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && inputOtherValue === "") {
      handleReset();
    }
  };

  const isReadOnly = buttonOptions.includes(donationValue as number);
  const isActiveStyles =
    isReadOnly
      ? 'border-[#A5A1A8] bg-[#CCC]'
      : donationValue === null
        ? 'border-[#D6BDF5] bg-[#FFF]'
        : 'border-[#A468E4] bg-[#FFF]';

  return (
    <input
      type="text"
      placeholder="Outro valor"
      value={inputOtherValue}
      step="0.01"
      onKeyDown={handleKeyDown}
      onClick={handleReset}
      onChange={(e) => handleInputChange(e.target.value)}
      className={`flex w-full items-center justify-center tablet:w-[120px] rounded-[8px] border-2 py-[16px] px-[8px] 
        font-semibold text-[#5F5764] text-center
        focus:outline-[#823DC7] hover:bg-[#F2EBFC] 
        ${isActiveStyles}
      `}
      readOnly={isReadOnly}
    />
  );
};

export const DonationOptions = () => {

  const donationValue = useDonationStore((state) => state.donationValue)
  const setDonationValue = useDonationStore((state) => state.setDonationValue)

  const [inputOtherValue, setInputOtherValue] = useState<string>("")

  const buttonOptions = [20, 50, 100, 150]
  const router = useRouter()

  return (
    <>
      <span className='flex flex-col w-full tablet:flex-row gap-4 tablet:justify-center'>
        {buttonOptions.map((option) => {
          return (
            <FixedValue
              key={option}
              donationValue={donationValue}
              option={option}
              setDonationValue={setDonationValue}
              setInputOtherValue={setInputOtherValue}
            />
          )
        })}

        <CustomValue
          buttonOptions={buttonOptions}
          donationValue={donationValue}
          inputOtherValue={inputOtherValue}
          setDonationValue={setDonationValue}
          setInputOtherValue={setInputOtherValue} />
      </span>
      <button
        className="bg-[#823DC7] w-full tablet:w-[240px] px-[20px] py-[16px] rounded-[8px] cursor-pointer 
    text-[#FFF] text-[20px] font-semibold 
    disabled:bg-[#CCC] disabled:text-[#A5A1A8] 
    hover:bg-[#663198] focus:outline-[#D6BDF5] active:bg-[#54287B]"
        type='button'
        disabled={donationValue === null}
        onClick={() => { router.push('/quero-doar/metodos') }}>
        Continuar
      </button>
    </>
  )
}
