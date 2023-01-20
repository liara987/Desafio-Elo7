import { useEffect, useState, useRef } from "react";
import "./App.scss";

//Componentes
import Cover from "./components/Cover/index";
import MoreInfo from "./components/MoreInfo/index";
import VideoPlayer from "./components/VideoPlayer";
import Figure from "./components/Figure/index";
import ColumnText from "./components/ColumnText/index";
import JobList from "./components/JobList/index";

//Assets
import coverImage from "./assets/images/foto-header.png";
import bottomImage from "./assets/images/foto-bottom.png";
import team1Image from "./assets/images/employees/camila.png";
import team2Image from "./assets/images/employees/beatriz.png";
import team3Image from "./assets/images/employees/guto.png";
import team4Image from "./assets/images/employees/david.png";
import activitiesImage from "./assets/images/icons/atividades.png";
import descontracaoImage from "./assets/images/icons/descontracao.png";
import qualidadeImage from "./assets/images/icons/qualidade.png";

const ColumnTextData = {
  first: {
    title: "qualidade de vida",
    icon: qualidadeImage,
    iconAlt: "Icone de uma carinha sorrindo",
    text: "Aqui na Elo7 nos valorizamos a sua vida pessoal e te auxiliamos a ter mais qualidade de vida,  com nosso modelo de trabalho 100% home office, você não precisa passar horas no transporte público e tem mais tempo para aproveitar a família,  além disso, oferecemos um auxílio home office para dar aquela força na hora de pagar a internet e luz.  Oferecemos uma folga no seu aniversário para você ter um dia especial com quem ama.",
  },
  second: {
    title: "Ambiente descontraido",
    icon: descontracaoImage,
    iconAlt: "Icone de mão com o dedo indicador e mindinho levantado",
    text: "Temos um ambiente de trabalho humanizado e abrimos espaços para conversas sobre diversos assuntos, mesmo que não seja relacionado ao trabalho. Queremos que todos possam crescer e para isso trabalhamos com o programa de desenvolvimento individual, onde estimulamos e auxiliamos o crescimento de cada um.",
  },
  third: {
    title: "Atividades extras",
    icon: activitiesImage,
    iconAlt: "Icone de uma paleta de tintas",
    text: "Queremos que as pessoas se conectem e troquem experiencias, por isso temos o Craft Day, um dia onde você entra no mundo de um dos nossos vendedores, para isso é enviado para sua casa todos os materiais necessários para aprender como ele cria os produtos, e você ainda aprende uma habilidade nova, bem legal né? E não para por aí, para que você possa se conectar ainda mais a gente faz festas na empresa todo ano, e não se preocupe, nos cuidamos de tudo para você posso vir e voltar em segurança.",
  },
};

function userWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handlerResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return size;
}

function App() {
  const [width] = userWindowSize();

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  function isMobile() {
    return width < 1023;
  }

  return (
    <div className="App">
      <Cover
        title="Trabalhe no Elo7"
        image={coverImage}
        imageAlt="Equipe da elo7 unida"
      />
      <div className="container">
        <p className="main-text">
          O Elo7 é o maior site de produtos autorais do Brasil! Formamos a maior
          comunidade de vendedores criativos e buscamos fomentar o comércio de
          produtos autorais. Muito mais que um site, o Elo7 nasceu em 2008 com a
          missão de transformar a vida das pessoas através de um ambiente
          humanizado de compra e venda que conecta e inspira, conferindo
          significado a cada transação realizada. Em Junho, ingressamos na House
          of Brands da Etsy, que foi um marco em nossa história, onde estamos
          tecendo uma série de novos desafios.
        </p>

        <div onClick={handleClick}>
          <MoreInfo title="vagas em aberto" />
        </div>

        <section className="about-us">
          <div className="our-history">
            <VideoPlayer
              height={isMobile() ? "200" : "400"}
              width={isMobile() ? "300" : "700"}
              title="Elo7 | 12 Anos - Faça Parte dessa História"
              id="Q9x8cT5Q-us"
            />

            <div className="our-history-content">
              <h2 className="our-history-title">Depoimentos</h2>
              <h3 className="our-history-subtitle">
                Jandrya Santos (Employer Branding & Endomarketing)
              </h3>
              <p className="our-history-text">
                Trabalhar no Elo7 é um sonho realizado, e fazer parte de um time
                que de fato se compromete a entregar o melhor com tanta
                criatividade, é inspirador. Além da transparência em todas as
                ações e em comunicações, saber do impacto que o nosso trabalho
                faz na vida de tantas pessoas nos motiva continuar a cada dia.
              </p>
            </div>
          </div>

          <h2 className="our-team">
            conheça nosso time <span>fora de série</span>
          </h2>

          <div className="our-employees">
            <Figure image={team1Image} />
            <Figure image={team2Image} />
            <Figure image={team3Image} />
            <Figure image={team4Image} />
          </div>
        </section>

        <section className="our-benefits">
          <ColumnText
            title={ColumnTextData.first.title}
            icon={ColumnTextData.first.icon}
            iconAlt={ColumnTextData.first.iconAlt}
            text={ColumnTextData.first.text}
          />
          <ColumnText
            title={ColumnTextData.second.title}
            icon={ColumnTextData.second.icon}
            iconAlt={ColumnTextData.second.iconAlt}
            text={ColumnTextData.second.text}
          />
          <ColumnText
            title={ColumnTextData.third.title}
            icon={ColumnTextData.third.icon}
            iconAlt={ColumnTextData.third.iconAlt}
            text={ColumnTextData.third.text}
          />
        </section>

        <MoreInfo title="saiba mais" url="https://jobs.kenoby.com/elo7" />

        <Cover image={bottomImage} imageAlt="Salão de festa" />

        <section className="our-jobs">
          <h2 className="our-jobs-title" ref={ref}>
            vagas em aberto
          </h2>
          <JobList />
        </section>
      </div>
    </div>
  );
}

export default App;
