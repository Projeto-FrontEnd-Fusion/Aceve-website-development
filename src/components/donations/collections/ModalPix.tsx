interface modalPixProps {
  closeModal: ()=> void;
}
export const ModalPix = ({ closeModal } : modalPixProps) =>{
  return(
  <div className="modal-holder w-full h-full bg-[#00000091] absolute z-30 top-0
  flex flex-col items-center justify-start">
    <div className="modal-body bg-[white] w-[90vw] md:w-[600px] h-[600px] rounded-sm mt-10">
      <button 
      type="button"
      onClick={closeModal}>Fechar</button>
    </div>
  </div>)
}