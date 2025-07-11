import { ComponentProps } from "react"
import { BiMenu } from "react-icons/bi"
import { MdClose } from "react-icons/md"

interface ToggleMenuProps extends ComponentProps<'button'>{
    isMenuOpen : boolean;
    setisMenuOpen : (isMenuOpen : boolean) => void
   
}

export const ToggleMenu = ({isMenuOpen, setisMenuOpen, ...props} : ToggleMenuProps) =>{

      const handlerKeyDow = (event : React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key == 'Escape'){
            console.log(event.ctrlKey)
            setisMenuOpen(false)
        }
    
      }
    return(
        <button {...props} className="desktop:hidden" type="button" aria-haspopup={true} onKeyDown={()=>handlerKeyDow} onClick={() => setisMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <MdClose
            title="Fechar Menu"
            aria-label="abre o menu lateral mobile"
            className={`text-[2rem] text-gray-normal hover:text-purple-light 
            cursor-pointer desktop:hidden`}
          />
        ) : (
          <BiMenu
            title="Abrir Menu"
            aria-label="fecha o menu lateral mobile"
            className={`text-[2rem] text-gray-normal hover:text-purple-light 
            cursor-pointer desktop:hidden`}
          />
        )}
      </button>
    )
}
