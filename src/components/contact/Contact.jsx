import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as TfiIcons from "react-icons/tfi";
import "./Contact.css";
import { useContext, useEffect } from "react";
import Context from "../../context/Context";

const Contact = () => {
  const { product } = useContext(Context);

  useEffect(() => {}, [product])
  return (
    <div className="container-footer">
      <div className="container-contact">
        <div className="contact">
          <div>
            <div className="contact-info">
              <SiIcons.SiHomeassistantcommunitystore />
              <div>
                <h4>Avenida Minas gerais, 500 - Piraquara - PR</h4>
                <h5>Dom - Dom / 24hrs</h5>
              </div>
            </div>
            <div className="contact-info">
              <a
                href="https://web.whatsapp.com/send?phone=41996013459"
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
                  <h5>(41) 99601-3459</h5>
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
                value={
                  product.title
                    ? `Olá, gostaria de fazer um orçamento com o seguinte produto ${product.title}.`
                    : ''
                }
              />
              <input
                type="hidden"
                name="accessKey"
                value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
              ></input>
              <input
                type="hidden"
                name="redirectTo"
                value="https://acqualine.vercel.app/"
              ></input>
              <button onClick={ localStorage.clear() }>Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="developer">
        <a href="https://my-portfolio-git-main-lucasbelgamann.vercel.app/" target="_blank" rel="noreferrer">
          <span>Developed by Lucas Agostinho</span>
        </a>
      </div>
    </div>
  );
};
export default Contact;
