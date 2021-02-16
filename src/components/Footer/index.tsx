import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./../../images/logo.png";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.primary}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-12 col-md ${style.item}`}>
              <a href="/">
                <img src={logo} alt="" height={33} />
              </a>
              <div className={style.bio}>
                <p>Somos uma empresa de TI focada em melhorias e projetos</p>
                <p className={style.margin}>
                  Buscamos solucionar todos os problemas iniciais resolvendo a
                  raiz deles para que não voltem acontecer.
                </p>
              </div>
              <div className={style.btns}>
                <a href="/" className={`btn btn-primary ${style.margin}`}>
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
                <a href="/" className={`btn btn-primary ${style.margin}`}>
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
                <a href="/" className={`btn btn-primary ${style.margin}`}>
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} />
                </a>
              </div>
              <div className={style.buttonGroup}></div>
            </div>
            <div className={`col-sm-12 col-md ${style.item}`}>
              <h3>Acesso Rápido</h3>
              <ul>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/">Serviços</a>
                </li>
                <li>
                  <a href="/">Soluções</a>
                </li>
                <li>
                  <a href="/">Projetos</a>
                </li>
                <li>
                  <a href="/">Área do Cliente</a>
                </li>
              </ul>
            </div>
            <div className={`col-sm-12 col-md ${style.item}`}>
              <h3>Entre em Contato</h3>
              <ul>
                <li>
                  <FontAwesomeIcon icon={"phone-alt"} /> São Paulo - SP (11)
                  4130-3278
                </li>
                <li>
                  <FontAwesomeIcon icon={"envelope"} />{" "}
                  suporte@rbdefender.com.br
                </li>
                <li>
                  <FontAwesomeIcon icon={"envelope"} />{" "}
                  contato@rbdefender.com.br
                </li>
                <li>
                  <FontAwesomeIcon icon={"calendar"} /> Segunda a sábado - Das 8
                  as 18hrs
                </li>
                <li>
                  <FontAwesomeIcon icon={"clock"} /> Clientes - Atendimento
                  24hrs
                </li>
                <li className={style.margin}>
                  <FontAwesomeIcon icon={"map-marker-alt"} /> R. Aguaraiba, 75 -
                  Vila Anhanguera,
                </li>
                <li>São Paulo - SP, 04673-050</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.secondary}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-12 col-md ${style.item}`}>
              Empresa de serviços e soluções de TI
            </div>
            <div className={`col-sm-12 col-md ${style.item}`}>
              &copy; 2021 RBdefender
            </div>
            <div className={`col-sm-12 col-md ${style.item}`}>
              Desenvolvido por ReisDesign
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
