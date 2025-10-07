import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import { FieldError, useFormContext } from 'react-hook-form'

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
  const { register } = useFormContext()


  const inputElement = props.as === 'textarea' ? (
    <textarea
      className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 resize-none ${error ? 'border-red-500' : ''}`}
      style={{ height: props.height ? `${props.height}px` : '128px' }}
      {...register(name)}
      {...(props as TextAreaFieldProps)}
    />
  ) : (
    <input
      className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 ${error ? 'border-red-500' : ''}`}
      {...register(name)}
      {...(props as InputFieldProps)}
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

