import "./Footer.scss";
import logo from "../../images/hh-logo.svg";
import hrspace from "../../images/Caption.svg";
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";
import ok from "../../images/ok.svg";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__telephoneWrapper">
                <div className="footer__telephoneInner">
                    <p className="footer__city">Для звонков по России</p>
                    <p className="footer__number">8 800 100-64-27</p>
                    <p className="footer__email">hrspace@hh.ru</p>
                </div>
                <div className="footer__telephoneInner">
                    <p className="footer__city">Москва</p>
                    <p className="footer__number">8 495 374-64-27</p>
                </div>
                <div className="footer__telephoneInner">
                    <p className="footer__city">Санкт-Петербург</p>
                    <p className="footer__number">8 812 458-45-45</p>
                </div>
            </div>
            <div className="footer__logoWrapper">
                <a className="footer__logo" href="https://hrspace.hh.ru/">
                    <img className="footer__img" src={logo} alt="Логотип хх" />
                    <img className="footer__name" src={hrspace} alt="HRSpace" />
                </a>
                <ul className="footer__icons">
                    <li>
                        <a className="footer__icon" href="https://t.me/hh_news_hr">
                        <img className="footer__iconImg" src={telegram} alt="Телеграм"/>
                        </a>
                    </li>
                    <li>
                        <a className="footer__icon" href="https://vk.com/headhunter">
                        <img className="footer__iconImg" src={vk} alt="ВК"/>
                        </a>
                    </li>
                    <li>
                        <a className="footer__icon" href="https://ok.ru/headhunter">
                        <img className="footer__iconImg" src={ok} alt="Одноклассники"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__copyrightWrapper">
                <ul className="footer__links">
                    <li><a className="footer__link" href="#">Заявки</a></li>
                    <li><a className="footer__link" href="#">Исполнители</a></li>
                    <li><a className="footer__link" href="#">Помощь</a></li>
                </ul>
                <p className="footer__copyright">©️2024 Группа компаний HeadHanter</p>
            </div>


            {/* <nav className="footer__nav}>
                <ul className="footer__ul}>
                    <li><a className="footer__a} href="#">Главная</a></li>
                    <li><a className="footer__a} href="#">Мои заявки</a></li>
                    <li><a className="footer__a} href="#">Поиск по рынку</a></li>
                    <li><a className="footer__a} href="#">Счёта</a></li>
                    <li><a className="footer__a} href="#">Помощь</a></li>
                </ul>
            </nav>
            <div className="footer__user}>
                <button className="footer__button} type="button" aria-label="Уведомления">
                    <img className="footer__icon} src={icon} alt="Уведомления" />
                </button>
                <img className="footer__avatar} src={avatar} alt="аватар" />
                <div className="footer__nikWrapper}>
                    <p className="footer__nikname}>Виталий Крымов</p>
                    <p className="footer__number}>#45732</p>
                </div>
            </div> */}
        </footer>
    )
}