import SHeader from './Style';

export default function Header() {
  return (
    <SHeader className="Header">
      <div className="burger-container">
        <nav>
          <ul>
            <a href="#about">
              <li>A propos</li>
            </a>

            <a href="#career">
              <li>Parcours</li>
            </a>

            <a href="#home">
              <div className="logo">
                <img src="/img/Header/logo.jpg" alt="logo" />
              </div>
            </a>

            <a href="#achievments">
              <li>Réalisations</li>
            </a>

            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </SHeader>
  );
}
