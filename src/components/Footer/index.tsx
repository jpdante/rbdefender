import logo from "./../../images/logo.png";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.primary}>
        <div className="container">
          <div className="row">
            <div className={`col ${style.item}`}>
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
              <div className={style.buttonGroup}></div>
            </div>
            <div className={`col ${style.item}`}>
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
            <div className={`col ${style.item}`}>
              <h3>Entre em Contato</h3>
              <ul>
                <li>
                  <a href="/">São Paulo - SP (11) 4130-3278</a>
                </li>
                <li>
                  <a href="/">suporte@rbdefender.com.br</a>
                </li>
                <li>
                  <a href="/">contato@rbdefender.com.br</a>
                </li>
                <li>
                  <a href="/">Segunda a sábado - Das 8 as 18hrs</a>
                </li>
                <li>
                  <a href="/">Clientes - Atendimento 24hrs</a>
                </li>
                <li className={style.margin}>
                  <a href="/">R. Aguaraiba, 75</a>
                </li>
                <li>
                  <a href="/">- Vila Anhanguera,</a>
                </li>
                <li>
                  <a href="/">São Paulo - SP, 04673-050</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.secondary}>
        <div className="container">
          <div className="row">
            <div className={`col ${style.item}`}>
              Empresa de serviços e soluções de TI
            </div>
            <div className={`col ${style.item}`}>&copy; 2021 RBdefender</div>
            <div className={`col ${style.item}`}>
              Desenvolvido por ReisDesign
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
