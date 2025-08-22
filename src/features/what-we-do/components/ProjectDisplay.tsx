export const ProjectsDisplay = () => {

    interface IProjectData {
        title: string,
        description: string,
        image: string,
        data?: {
            public: string,
            days: string,
        }
    }

    const projectData: IProjectData[] = [
        {
            title: "As Violetas",
            description: "Acolhe mulheres com medidas protetivas e em extrema vulnerabilidade social. Oferece atendimento com assistente social e psicólogas, workshops, palestras, dinâmicas, apresentações e rodas de conversa (coletivas e individuais) sobre violência doméstica. Atua em rede com serviços como  União Brasileira dos Estudantes Secundaristas (UBES), Delegacia de Defesa da Mulher (DDM) e Guarda Civil Metropolitana (GCM).",
            image: "",
            data: {
                public: "mulheres e adolescentes (15 a 65+ anos)",
                days: "Terças, quintas e domingos",
            }
        },
        {
            title: "Vivaleite",
            description: "O Projeto Vivaleite garante segurança alimentar para crianças de até 6 anos e idosos a partir de 60 anos em situação de vulnerabilidade, distribuindo semanalmente 4 litros de leite para cada um dos 50 beneficiários cadastrados – sendo 33 crianças e 17 idosos. A iniciativa oferece não apenas um alimento essencial ao crescimento e à saúde, mas também um momento de acolhimento e cuidado, fortalecendo vínculos e promovendo dignidade dentro da comunidade.",
            image: "",
            data: {
                public: "Crianças de até 6 anos e idosos a partir de 60 anos",
                days: "Terças-feiras, das 9h às 11h",
            }
        },
        {
            title: "Viotec",
            description: "O Viotec é um projeto de capacitação tecnológica voltado para jovens da favela onde a ONG está inserida e comunidades vizinhas, oferecendo formação prática em áreas como terminologia, redes, robótica e Arduino, além de palestras sobre inteligência emocional e respeito às mulheres. Com o objetivo de preparar esses jovens para o mercado de trabalho e ampliar suas perspectivas profissionais, o projeto incentiva o desenvolvimento de talentos e o protagonismo juvenil.",
            image: "",
            data: {
                public: "Jovens de 14 a 29 anos",
                days: "Sábados, das 9h às 12h",
            }
        },
        {
            title: "Projeto Kime",
            description: "O Projeto Kime – Karatê e Psicanálise – é uma iniciativa que combina arte marcial e rodas de conversa para promover o desenvolvimento físico, emocional e social de crianças e adolescentes. Por meio do karatê, as participantes trabalham disciplina, foco e autoestima, enquanto os encontros de psicanálise estimulam o diálogo, a inteligência emocional e o bem-estar. Essa integração fortalece a autoconfiança, incentiva o respeito ao próximo e contribui para a formação de cidadãos mais conscientes.",
            image: "",
            data: {
                public: "Crianças e adolescentes de 6 a 15 anos",
                days: "Quartas-feiras - 6 a 9 anos: das 8h às 12h - 12 a 15 anos: das 13h às 17h",
            }
        },
        {
            title: "Brecholeta",
            description: "O Brecholeta é um negócio social criado pela Violeta Eliz em parceria com o Instituto C&A, que une sustentabilidade e impacto social. O projeto recebe doações de roupas e acessórios com pequenas avarias, que são cuidadosamente selecionados e revendidos a preços acessíveis. Todo o lucro das vendas é revertido para financiar as atividades da ONG, cobrindo despesas essenciais como água, luz, aluguel e parte da equipe. Além de contribuir para a manutenção dos projetos sociais, o Brecholeta também gera oportunidade de trabalho e renda — hoje emprega uma mãe solo venezuelana, que encontrou no projeto a chance de recomeçar sua vida no Brasil.",
            image: "",
            
        },
        {
            title: "As justiceiras",
            description: "O Projeto Justiceiras atua de forma online para oferecer apoio multidisciplinar a mulheres em situação de violência, conectando-as a uma rede de acolhimento composta por profissionais de diversas áreas. A iniciativa conta com atendimento jurídico, psicológico, socioassistencial e médico, garantindo orientação e suporte de maneira integrada e humanizada. Por meio dessa articulação, o projeto busca não apenas amparar as vítimas em momentos de crise, mas também fortalecer sua autonomia e segurança para que possam reconstruir suas vidas com dignidade.",
            image: "",
            
        },
    ]

    return (
        <section className="m-auto ">
            <div className="flex flex-col">
                <div>
                    <div>
                        <h3>PROJETOS</h3>
                        <h2>As Violetas</h2>
                    </div>
                    <div>
                        <p>
                            Acolhe mulheres com medidas protetivas e em extrema vulnerabilidade social. Oferece atendimento com assistente social e psicólogas, workshops, palestras, dinâmicas, apresentações e rodas de conversa (coletivas e individuais) sobre violência doméstica. Atua em rede com serviços como  União Brasileira dos Estudantes Secundaristas (UBES), Delegacia de Defesa da Mulher (DDM) e Guarda Civil Metropolitana (GCM).

                            Público-alvo: mulheres e adolescentes (15 a 65+ anos).
                            Atendimento: Terças, quintas e domingos.
                        </p>
                        <ul>
                            <li><span className="font-bold">Público-alvo: </span>mulheres e adolescentes (15 a 65+ anos)</li>
                            <li><span className="font-bold">Atendimento: </span>Terças, quintas e domingos</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}