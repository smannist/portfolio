import { NextComponentType } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.css";

const Header: NextComponentType = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.nameContainer}>
        <p className={`${styles.name} font-noto`}>Sami</p>
        <p className={`${styles.name} font-noto`}>Männistö</p>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faGithub} className={`${styles.githubIcon}`} />
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`${styles.linkedinIcon}`}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.me} font-noto`}>
          I am an aspiring Software Developer dedicated to becoming a skilled
          and versatile full-stack developer. I am also passionate about
          artificial intelligence, with a particular interest in machine
          learning.
        </p>
      </div>
    </div>
  );
};

export default Header;
