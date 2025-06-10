'use client'
import Image from 'next/image'
import pixQrCode from '@/assets/pixQrCode.jpg'
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';

interface modalPixProps {
  closeModal: ()=> void;
}
export const ModalPix = ({ closeModal } : modalPixProps) =>{
  const [copiedText, setCopiedText] = useState(false)
  const modalRef = useRef<null | HTMLDivElement>(null)

  useEffect(()=>{
    function handleKeydown(e: KeyboardEvent){
      if(e.key == 'Escape'){
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return ()=>{
      document.removeEventListener('keydown', handleKeydown)
    }
  },[closeModal])

  useEffect(()=>{
    if(modalRef.current){
      const focusableElements = modalRef.current.querySelectorAll('button, .qr-code,')
    }
  },[modalRef])

  async function handleCopyText(){
    await navigator.clipboard.writeText("11964771181")
    .then(()=>{
      setCopiedText(true)
      setTimeout(()=>{
        setCopiedText(false)
      }, 4000)
    })
  }
  
  return(
  <dialog className="modal-holder w-full h-full bg-[#00000091] absolute z-30 top-0
  flex flex-col items-center justify-start">
    <div className="modal-body bg-[white] w-[90vw] md:w-[600px] h-fit rounded-lg mt-10 flex flex-col items-center justify-center relative">
        <button 
        type="button"
        onClick={closeModal}
        aria-label="Fechar modal"
        title="Fechar modal"
        className='absolute top-2 right-2 flex flex-row items-center justify-center'
        tabIndex={1}>
        <IoClose size={'2em'} className="hover:fill-red-500 transition-colors duration-300"/>
        </button>
      <h4 className='text-[2em]'>Pix</h4>
      <Image
      src={pixQrCode}
      width={600}
      height={600}
      className='qr-code w-[90%] h-[auto] md:w-[300px] md:h-[300px]'
      alt="QR Code do pix para doações"/>
      <div className='chave-pix grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_1.5em] md:grid-rows-2 gap-x-2 justify-center mt-2 mb-1'>
        <span className='flex flex-col items-center w-full'>
          <p>(11) 964771181</p>
          <p>Elizangela M dos Santos</p>
        </span>
        <button
        type='button'
        className='cursor-pointer w-fit py-1 px-5 border-2 bg-purple-light text-white-smooth rounded-lg outline-purple-haiti justify-self-center
        hover:bg-purple-950 transition-colors duration-500'
        onClick={()=>handleCopyText()}>
          Copiar
        </button>
        {copiedText && (
          <p className='row-start-3 md:row-start-2 md:col-span-2 text-center text-green-600'>
            Chave pix copiada para a área de transferência
          </p>
        )}
      </div>
    </div>
  </dialog>)
}