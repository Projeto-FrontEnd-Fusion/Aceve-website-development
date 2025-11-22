import { useFormContext } from "react-hook-form"
import { useEffect, useState } from "react"

export function useMaskedInput(name: string, mask?: (val: string) => string) {
  const { setValue, watch } = useFormContext()
  const rawValue = watch(name) ?? ''
  const [maskedValue, setMaskedValue] = useState(() => mask ? mask(rawValue) : rawValue)

  useEffect(() => {
    setMaskedValue(mask ? mask(rawValue) : rawValue)
  }, [rawValue, mask])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    const valueToSet = mask ? mask(inputValue) : inputValue
    setMaskedValue(valueToSet)

    setValue(name, valueToSet, {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  return { maskedValue, handleChange }
}

