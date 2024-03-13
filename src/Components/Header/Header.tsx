// import styles from "./Header.module.scss";
import "./Header.scss";
import logo from "../../images/hh-logo.svg";
import hrspace from "../../images/Caption.svg";
import icon from "../../images/icon-header.png";
import avatar from "../../images/ava_vk 2.png";

export function Header() {
    return (
        <header className="header">
            <a className="header__logo" href="https://hrspace.hh.ru/">
                <img className="header__img" src={logo} alt="Логотип хх" />
                <img className="header__name" src={hrspace} alt="HRSpace" />
            </a>
            <nav className="header__nav">
                <ul className="header__links">
                    <li><a className="header__link" href="#">Главная</a></li>
                    <li><a className="header__link" href="#">Мои заявки</a></li>
                    <li><a className="header__link" href="#">Поиск по рынку</a></li>
                    <li><a className="header__link" href="#">Счёта</a></li>
                    <li><a className="header__link" href="#">Помощь</a></li>
                </ul>
            </nav>
            <div className="header__user">
                <button className="header__button" type="button" aria-label="Уведомления">
                    <img className="header__icon" src={icon} alt="Уведомления" />
                </button>
                <img className="header__avatar" src={avatar} alt="аватар" />
                <div className="header__nikWrapper">
                    <p className="header__nikname">Виталий Крымов</p>
                    <p className="header__number">#45732</p>
                </div>
            </div>
        </header>
    )
}