import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as TfiIcons from "react-icons/tfi";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [nome, setNome] = useState("");

  const handleChange = ({ target: { value } }) => {
    setNome(value);
  };

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
                  href="https://web.whatsapp.com/send?phone=41996013459"
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
            <div>
            <h3 id="contact">Entre em contato conosco!</h3>
            </div>
            <form>
              <div className="sigle-input">
                <input
                  type="text"
                  name="nome"
                  required
                  onChange={handleChange}
                  className="input"
                  id="nome"
                />
                <label htmlFor="nome">Nome</label>
              </div>
              <a
                href={`https://wa.me/5541996013459?text=Olá eu me chamo ${nome}, e gostaria de saber mais sobre os seus produtos e serviços!`}
                target="_blank"
                rel="noreferrer"
              >
                Enviar
              </a>
            </form>
          </div>
        </div>
      </div>

      <div className="developer">
        <a
          href="https://my-portfolio-git-main-lucasbelgamann.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Developed by Lucas Agostinho</span>
        </a>
      </div>
    </div>
  );
};
export default Contact;
