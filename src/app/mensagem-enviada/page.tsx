import Link from "next/link"

const MessageConfirmation = () => {
  return (
    <main
    className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1>Mensagem enviada com sucesso!</h1>
      <p>Agradecemos pelo contato</p>
      <Link href={'/'}>Voltar a página inicial</Link>
    </main>
  )
}
export default MessageConfirmation