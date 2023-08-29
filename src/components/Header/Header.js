import styles from "./Header.module.scss";
import logo from "../../assets/img/logo-jeux.png";

export default function Header() {
    return (
        <header>
            <div className="divLogo">
                <a href="">
                    <img className={`${styles.logo}`} src={logo} alt="logo manette"></img>
                </a>
            </div>
            <div className={`${styles.lienPage}`}>
                <ul>
                    <li><a href="">Jeux du moment</a></li>
                    <li><a href="">Jeux à venir</a></li>
                    <li><a href="">Jeux retro</a></li>
                </ul>
            </div>
            <div className={`${styles.btnCo}`}>
                <button className="btnConnexion">test</button>
            </div>
        </header>
    )
}