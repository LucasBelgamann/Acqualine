import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as TfiIcons from "react-icons/tfi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-footer">
      <div className="container-contact">
        <div className="contact">
          <div>
            <div className="contact-info">
              <SiIcons.SiHomeassistantcommunitystore />
              <div>
                <h4>Rua rio purus, 1390 - Pinhais - PR</h4>
                <h5>
                  Seg - Sex / 9:00hs - 17:30hs e Sábados /9:00hs - 12:00hs
                </h5>
              </div>
            </div>
            <div className="contact-info">
              <a
                href="https://web.whatsapp.com/send?phone=41991770049"
                target="_blank"
                rel="noreferrer"
              >
                <BsIcons.BsWhatsapp />
              </a>
              <div>
                <a
                  href="https://web.whatsapp.com/send?phone=41991770049"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>WhatsApp</h4>
                  <h5>(41) 98817-6523</h5>
                </a>
              </div>
            </div>
            <div className="contact-info">
              <TfiIcons.TfiEmail />
              <div>
                <h4>Email</h4>
                <h5>acqualinecuritiba@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="contact-line"></div>
          <div className="contact-form" id="contact">
            <h3 id="contact">Faça seu orçamento</h3>
            <form action="https://api.staticforms.xyz/submit" method="post">
              <div className="sigle-input">
                <input
                  type="text"
                  name="name"
                  required
                  className="input"
                  id="nome"
                />
                <label htmlFor="nome">Nome</label>
              </div>
              <div className="sigle-input">
                <input
                  type="text"
                  name="email"
                  required
                  className="input"
                  id="email"
                />
                <label htmlFor="email">Telefone</label>
              </div>
              <textarea
                name="message"
                required
                className="textarea"
                placeholder="Digite a sua mensagem"
              />
              <input
                type="hidden"
                name="accessKey"
                value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
              ></input>
              <input
                type="hidden"
                name="redirectTo"
                value="https://example.com/contact/success"
              ></input>
              <button>Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="developer">
        <span>Developed by Lucas Agostinho</span>
      </div>
    </div>
  );
};
export default Contact;
