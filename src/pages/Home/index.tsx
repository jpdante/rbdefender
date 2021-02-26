import Footer from "../../components/Footer";
import AliceCarousel from "react-alice-carousel";

import "./home.scss";
import bg1 from "./../../images/bg1.png";
import bg2 from "./../../images/bg2.png";

import shieldIcon from "./../../svg/shield.svg";
import chronometerIcon from "./../../svg/chronometer.svg";
import lightbulbIcon from "./../../svg/lightbulb.svg";

import sophosLogo from "./../../svg/brands/sophos.png";
import microsoftLogo from "./../../svg/brands/microsoft.png";
import intelbrasLogo from "./../../svg/brands/intelbras.png";
import ciscoLogo from "./../../svg/brands/cisco.png";
import autodeskLogo from "./../../svg/brands/autodesk.png";
import dellLogo from "./../../svg/brands/dell.png";
import fortinetLogo from "./../../svg/brands/fortinet.png";
import furukawaLogo from "./../../svg/brands/furukawa.png";
import kasperskyLogo from "./../../svg/brands/kaspersky.png";
import officeLogo from "./../../svg/brands/office.png";
import windowsServerLogo from "./../../svg/brands/windows-server.png";

import support from "./../../images/support.png";
import camera from "./../../images/camera.png";
import server from "./../../images/server.png";

function Home() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 5 },
  };

  const items = [
    <img src={sophosLogo} width={200} alt="Sophos logo" />,
    <img src={microsoftLogo} width={200} alt="Microsoft logo" />,
    <img src={intelbrasLogo} width={200} alt="Intelbras logo" />,
    <img src={ciscoLogo} width={200} alt="Cisco logo" />,
    <img src={autodeskLogo} width={200} alt="Autodesk logo" />,
    <img src={dellLogo} width={200} alt="Dell logo" />,
    <img src={fortinetLogo} width={200} alt="Fortinet logo" />,
    <img src={furukawaLogo} width={200} alt="Furukawa logo" />,
    <img src={kasperskyLogo} width={200} alt="Kaspersky logo" />,
    <img src={officeLogo} width={200} alt="Office logo" />,
    <img src={windowsServerLogo} width={200} alt="Windows Server logo" />,
  ];

  return (
    <div className="home">
      <div className="background bg-white">
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

      <div className="background">
        <img src={bg2} alt="background" />
      </div>

      <div className="info">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-3 info-item">
              <h1>
                <strong>4</strong>
              </h1>
              <hr />
              <p>Anos de inovaçao</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 info-item">
              <h1>
                <strong>2</strong>
              </h1>
              <hr />
              <p>Unidades</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 info-item">
              <h1>
                <strong>9</strong>
              </h1>
              <hr />
              <p>Certificações Técnicas</p>
            </div>
            <div className="col-6 col-sm-6 col-md-3 info-item">
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
            <div className="col-6 col-sm-6 col-md pattern-item">
              <h1>
                <strong>ITIL</strong>
              </h1>
            </div>
            <div className="col-6 col-sm-6 col-md pattern-item">
              <h1>
                <strong>COBIT</strong>
              </h1>
            </div>
            <div className="col-6 col-sm-6 col-md pattern-item">
              <h1>
                <strong>NBR 14565</strong>
              </h1>
            </div>
            <div className="col-6 col-sm-6 col-md pattern-item">
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
                  <img src={support} alt="Suporte" />
                </div>
                <h2>
                  <strong>SUPORTE DE TI</strong>
                </h2>
                <p>
                  Especialistas em suporte
                  <br />
                  tanto{" "}
                  <strong>
                    presencial, como
                    <br /> remoto e home office
                  </strong>
                </p>
              </div>
              <div className="col-sm-12 col-md feature-item">
                <div className="picture">
                  <img src={server} alt="Server" />
                </div>
                <h2>
                  <strong>PROJETOS DE REDES</strong>
                </h2>
                <p>
                  Estruturação de redes por
                  <br />
                  <strong>cabos, wireless e satélite</strong>
                </p>
              </div>
              <div className="col-sm-12 col-md feature-item">
                <div className="picture">
                  <img src={camera} alt="Camera" />
                </div>
                <h2>
                  <strong>SEGURANÇA ESPECIALIZADA</strong>
                </h2>
                <p>
                  Sua empresa <strong>segura</strong> com
                  <br />
                  <strong>
                    monitoramento por
                    <br /> vídeo e sensores
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <AliceCarousel
            autoPlay
            autoPlayInterval={2000}
            infinite
            items={items}
            responsive={responsive}
            disableButtonsControls
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
