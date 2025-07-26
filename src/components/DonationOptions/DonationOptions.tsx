'use client'
import { Dispatch, useState } from "react"
import { useRouter } from 'next/navigation'
import { useDonationStore } from "@/zustand-store/donationvalue.store"
import { parseAndFormatCurrency, formatInitialValue } from "@/utils/parseAndFormatCurrency";

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
      ? 'border-primary-600 bg-primary-600'
      : 'border-primary-400 bg-[#ffff] hover:bg-primary-200',
    text: isChecked ? 'text-primary-100' : 'text-primary-800',
  };

  return (
    <label
      className={`
        cursor-pointer relative flex justify-center items-center 
        w-full
        rounded-[8px] py-4 px-2 border-2 
        active:bg-primary-400 focus:outline-primary-800 focus:outline focus:outline-2
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
          font-semibold flex items-center justify-center
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
    const { formatted, parsed } = parseAndFormatCurrency(rawInput);

    setInputOtherValue(formatted);
    setDonationValue(parsed);
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
      ? 'border-grey-500 bg-grey-300'
      : donationValue === null
        ? 'border-primary-400 bg-[#FFF]'
        : 'border-primary-500 bg-[#FFF]';

  return (
    <input
      type="text"
      placeholder="Outro valor"
      value={inputOtherValue}
      step="0.01"
      onKeyDown={handleKeyDown}
      onClick={handleReset}
      inputMode="numeric"
      onChange={(e) => handleInputChange(e.target.value)}
      className={`flex w-full items-center text-base justify-center rounded-[8px] border-2 py-4 px-2 
        font-semibold text-grey-600 text-center
        focus:outline-primary-600 hover:bg-primary-200 
        ${isActiveStyles}
      `}
    />
  );
};

export const DonationOptions = () => {

  const donationValue = useDonationStore((state) => state.donationValue)
  const setDonationValue = useDonationStore((state) => state.setDonationValue)
  const buttonOptions = [20, 50, 100, 150]

  // preserve custom input upon returning to the page
  const initialOtherValue = donationValue !== null && !buttonOptions.includes(donationValue)
    ? formatInitialValue(donationValue)
    : ""

  const [inputOtherValue, setInputOtherValue] = useState<string>(initialOtherValue)

  const router = useRouter()

  return (
    <>
      <span className='flex flex-col w-full tablet:flex-row gap-4 tablet:justify-around'>
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
        className="bg-primary-600 w-full tablet:w-[240px] px-[20px] py-[16px] rounded-[8px] cursor-pointer 
          text-[#FFF] text-[20px] font-semibold 
          disabled:bg-grey-300 disabled:text-grey-500 
          hover:bg-primary-700 focus:outline-primary-400 active:bg-primary-800"
        type='button'
        disabled={donationValue === null || donationValue === 0}
        onClick={() => { router.push('/quero-doar/metodos') }}>
        Continuar
      </button>
    </>
  )
}
