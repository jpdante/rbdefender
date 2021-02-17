import Footer from "../../components/Footer";

import "./home.scss";
import bg1 from "./../../images/bg1.png";
import bg2 from "./../../images/bg2.png";
import support from "./../../images/support.png";
import shieldIcon from "./../../svg/shield.svg";
import chronometerIcon from "./../../svg/chronometer.svg";
import lightbulbIcon from "./../../svg/lightbulb.svg";

function Home() {
  return (
    <div className="home">
      <div className="background">
        <img src={bg1} alt="background" />
      </div>

      <div className="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 feature-item">
              <div className="icon">
                <img src={shieldIcon} alt="Escudo" />
              </div>
              <h2>
                <strong>SEGURANÇA</strong>
              </h2>
              <p>
                Garantimos
                <br />
                <strong>proteção</strong> para suas
                <br /> informações, processos
                <br /> e acessos
              </p>
            </div>
            <div className="col-sm-12 col-md-4 feature-item">
              <div className="icon">
                {" "}
                <img src={chronometerIcon} alt="Cronometro" />
              </div>
              <h2>
                <strong>AGILIDADE</strong>
              </h2>
              <p>
                Solucionaremos <br />
                seus problemas de maneira <br />
                <strong>rápida</strong> e <strong>eficiente</strong>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 feature-item">
              <div className="icon">
                {" "}
                <img src={lightbulbIcon} alt="Lampada" />
              </div>
              <h2>
                <strong>INOVAÇÃO</strong>
              </h2>
              <p>
                Sugeriremos <br />
                Tecnologias para tornar <br />o seu negócio mais{" "}
                <strong>produtivo</strong>
                <br /> e <strong>eficiente</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="background2">
        <div className="container">
          <img src={bg2} alt="background" />
        </div>
      </div>

      <div className="info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 info-item">
              <h1>
                <strong>4</strong>
              </h1>
              <hr />
              <p>Anos de inovaçao</p>
            </div>
            <div className="col-sm-12 col-md-3 info-item">
              <h1>
                <strong>2</strong>
              </h1>
              <hr />
              <p>Unidades</p>
            </div>
            <div className="col-sm-12 col-md-3 info-item">
              <h1>
                <strong>9</strong>
              </h1>
              <hr />
              <p>Certificações Técnicas</p>
            </div>
            <div className="col-sm-12 col-md-3 info-item">
              <h1>
                <strong>20000</strong>
              </h1>
              <hr />
              <p>ISO</p>
            </div>
          </div>
        </div>
      </div>

      <div className="patterns">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md pattern-item">
              <h1>
                <strong>PADRÕES:</strong>
              </h1>
            </div>
            <div className="col-sm-12 col-md pattern-item">
              <h1>
                <strong>ITIL</strong>
              </h1>
            </div>
            <div className="col-sm-12 col-md pattern-item">
              <h1>
                <strong>COBIT</strong>
              </h1>
            </div>
            <div className="col-sm-12 col-md pattern-item">
              <h1>
                <strong>Nbr 14565</strong>
              </h1>
            </div>
            <div className="col-sm-12 col-md pattern-item">
              <h1>
                <strong>SCRUM</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-cont">
        <h1>
          O NOSSO FOCO <strong>É VOCÊ</strong>
        </h1>
        <p>
          Cuidaremos do seu <strong>ambiente de TI</strong> enquanto
          <br />
          estaremos nos esforçando <strong>lado a lado</strong> para ajudar o
          <br />
          seu empreendimento <strong>crescer cada vez mais.</strong>
        </p>
        <div className="features">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md feature-item">
                <div className="picture">
                  <img src={support} alt="Escudo" />
                </div>
                <h2>
                  <strong>SUPORTE DE TI</strong>
                </h2>
                <p>
                  Especialistas em suporte
                  <br />
                  tanto <strong>presencial, como
                  <br /> remoto e home office</strong>
                </p>
              </div>
              <div className="col-sm-12 col-md feature-item">

              </div>
              <div className="col-sm-12 col-md feature-item">

              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          {">"} INSERIR SLIDER DE LOGOS {"<"}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
