import { whoweareDetails } from "@/model/whoweare";
import clsx from "clsx";


export const Footer = () => {
    return (
        <footer className="bg-purple-medium">
            <div className="flex items-center justify-evenly py-16 text-white-normal ">
                <figure>
                    <img src={whoweareDetails.whoweareImg1 } alt="" />
                

                </figure>

                <div className="">
                    <h4 className="mb-4"><strong>Menu</strong></h4>
                    <ul className="gap-4">
                        <li className="mb-4">Quem somos</li>
                        <li className="mb-4">Ajude-nos</li>
                        <li className="mb-4">Brechó</li>
                        <li className="mb-4">Política de privacidade</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4"><strong>Contato</strong></h4>
                    <ul className="gap-4">
                        <li className="mb-4">
                            Rua Ricardo Julio Ferraz, 357/367 <br />
                            São Paulo, SP, 04814-120<br />
                            Brasil
                        </li>
                        <li className="mb-4">(11) 98293-5150</li>
                        <li className="mb-4">eliz_social@outlook.com</li>
                    </ul>
                </div>
            </div>
            <div className="w-full bg-purple-haiti text-white-normal flex justify-between py-3">
                <div>
                    <p>© Associação Cultural e Educacional Violeta Eliz | Todos direitos reservados</p>
                </div>
                <div>
                    <p>
                        Feito com "coração" pelo <strong><u>Grupo Símios</u></strong>

                    </p>
                </div>
            </div>
        </footer>
    )
}