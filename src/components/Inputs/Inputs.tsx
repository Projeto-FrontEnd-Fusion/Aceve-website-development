import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useState
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
  const { setValue, watch } = useFormContext()

  const { name, error, mask, ...rest } = props

  const rawValue = watch(name) ?? ''

  const [maskedValue, setMaskedValue] = useState(() => mask ? mask(rawValue) : rawValue)

  useEffect(() => {
    setMaskedValue(mask ? mask(rawValue) : rawValue)
  }, [rawValue, mask])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value

    if (mask) {
      const masked  = mask(inputValue)
      setMaskedValue(masked)

      setValue(name, maskedValue, {
        shouldDirty: true,
        shouldValidate: true,
      })
    } else {
      setMaskedValue(inputValue)
      setValue(name, inputValue, {
        shouldDirty: true,
        shouldValidate: true,
    })
    }
  }

  const inputElement = props.as === 'textarea' ? (
    <textarea
      className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 resize-none ${error ? 'border-red-500' : ''}`}
      style={{ height: props.height ? `${props.height}px` : '128px' }}
      value={maskedValue}
      onChange={handleChange}
      {...(rest as TextAreaFieldProps)}
    />
  ) : (
    <input
      className={`w-full border-primary-500 border-2 rounded-lg py-4 px-2 min-md:p-4 text-grey-500 text-base placeholder:text-grey-400 ${error ? 'border-red-500' : ''}`}
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

