interface modalPixProps {
  closeModal: ()=> void;
}
export const ModalPix = ({ closeModal } : modalPixProps) =>{
  return(<>
  Modal
  <button 
  type="button"
  onClick={closeModal}>Fechar</button></>)
}