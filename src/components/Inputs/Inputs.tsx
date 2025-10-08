import { useMaskedInput } from '@/hooks/useMaskedInput'
import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

interface Props {
  name: string
  error?: FieldError
  mask?: (value: string) => string
}

interface InputFieldProps
  extends Props,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  as?: 'input'
  type: HTMLInputTypeAttribute
  height?: never
}

interface TextAreaFieldProps
  extends Props,
    Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  as: 'textarea'
  height?: number
  type?: never
}

type InputProps = InputFieldProps | TextAreaFieldProps

export const Inputs = (props: InputProps) => {
  const { name, as = 'input', error, mask, ...rest } = props

  const { maskedValue, handleChange } = useMaskedInput(name, mask)

  const baseClass = `w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 ${error ? 'border-red-500' : ''}`

  const inputElement = props.as === 'textarea' ? (
    <textarea
      className={`${baseClass} resize-none`}
      style={{ height: props.height ? `${props.height}px` : '128px' }}
      value={maskedValue}
      onChange={handleChange}
      {...(rest as TextAreaFieldProps)}
    />
  ) : (
    <input
      className={baseClass}
      value={maskedValue}
      onChange={handleChange}
      {...(rest as InputFieldProps)}
    />
  )

  return (
    <div className='mb-4 min-md:mb-8'>
      {inputElement}
      {error && (
        <p className='text-red-500 text-sm mt-1'>
          {error.message?.toString()}
        </p>
      )}
    </div>
  )
}

