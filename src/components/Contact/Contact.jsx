import SContact from './Style';

export default function Contact() {
  return (
    <SContact id="contact">
      <container className="container">
        <div className="picture">
          <figure className="pic">
            <img src="/img/Contact/contact.webp" alt="contactPic" />
          </figure>
        </div>
        <section className="contact">
          <h1>Coordonnées</h1>

          <article className="sTitles">
            <h2>Mobilité</h2>
            <p>Métropole lilloise et environs / Île-de-France</p>
            <br />
            <h2>Contact</h2>

            <address>
              <a
                href="mailto:hamrounehacene06@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Contact/mail.png" alt="mailIcon" />
              </a>
              <a
                href="https://www.linkedin.com/in/hacenehamroune/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Contact/linkedIn.png" alt="linkedIn" />
              </a>
              <a href="tel:0650241139">
                <img src="/img/Contact/phone.png" alt="phoneNumber" />
              </a>
            </address>
          </article>
        </section>
      </container>
    </SContact>
  );
}
