import "./Header.scss";
import logo from "../../images/hh-logo.svg";
import hrspace from "../../images/Caption.svg";
import icon from "../../images/icon-header.png";
import avatar from "../../images/ava_vk 2.png";

type Props = {
    loggedIn: boolean
}

export function Header({ loggedIn }: Props) {

    function renderHeader() {
        if (loggedIn) {
            return (
                <>
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
                            <p className="header__nikname">Сергей Иванов</p>
                            <p className="header__number">#45732</p>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="header__logo-wrapper">
                        <a className="header__logo" href="https://hrspace.hh.ru/">
                            <img className="header__img" src={logo} alt="Логотип хх" />
                        </a>
                        <a className="header__logo-link" href="#">Прайс-лист</a>
                        <a className="header__logo-link header__logo-link_underline" href="#">Помощь</a>
                    </div>
                    <div className="header__links-wrapper">
                        <a className="header__logo-link header__logo-link_underline" href="#">Поиск</a>
                        <a className="header__green-link" href="#">Разместить вакансию</a>
                        <a className="header__auth-link" href="#">Зарегистрироваться</a>
                        <a className="header__auth-link" href="#">Войти</a>
                    </div>
                </>
            )

        }
    }

    return (
        <header className="header">
            {renderHeader()}
        </header>
    )
}