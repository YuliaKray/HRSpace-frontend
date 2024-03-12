import styles from "./Header.module.scss";
import logo from "../../images/hh-logo.svg";
import hrspace from "../../images/Caption.svg";
import icon from "../../images/icon-header.png";
import avatar from "../../images/ava_vk 2.png";

export function Header() {
    return (
        <header className={styles.header}>
            <a className={styles.logo} href="https://hrspace.hh.ru/">
                <img className={styles.img} src={logo} alt="Логотип хх" />
                <img className={styles.name} src={hrspace} alt="HRSpace" />
            </a>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><a className={styles.a} href="#">Главная</a></li>
                    <li><a className={styles.a} href="#">Мои заявки</a></li>
                    <li><a className={styles.a} href="#">Поиск по рынку</a></li>
                    <li><a className={styles.a} href="#">Счёта</a></li>
                    <li><a className={styles.a} href="#">Помощь</a></li>
                </ul>
            </nav>
            <div className={styles.user}>
                <button className={styles.button} type="button" aria-label="Уведомления">
                    <img className={styles.icon} src={icon} alt="Уведомления" />
                </button>
                <img className={styles.avatar} src={avatar} alt="аватар" />
                <div className={styles.nikWrapper}>
                    <p className={styles.nikname}>Виталий Крымов</p>
                    <p className={styles.number}>#45732</p>
                </div>
            </div>
        </header>
    )
}