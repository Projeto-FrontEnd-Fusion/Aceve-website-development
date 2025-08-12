
export const buttonVariants = {
  'primary': 'text-white-normal bg-primary-600 focus:outline-primary-400 hover:bg-primary-700 active:bg-[bg-primary-800]',
  'text': 'bg-grey-100 text-gray-400 hover:bg-gray-100 active:bg-gray-300 focus:outline-grey-400',
  'text-grey-300': 'text-grey-500 hover:bg-grey-200 active:bg-grey-300 focus:outline-grey-400',
  'outlined-primary-400': 'bg-grey-100 border-2 border-primary-400 hover:bg-primary-200 focus:outline-primary-800 active:bg-primary-400',
  'outlined-primary-600': 'text-primary-600 border-2 border-primary-600 hover:bg-primary-600 hover:text-grey-100',
  'outlined-primary-700': 'text-primary-700 border-2 border-primary-600 hover:bg-primary-700 hover:text-grey-100',
}
export type ButtonVariants = keyof typeof buttonVariants
