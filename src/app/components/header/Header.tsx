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
        <ul className={styles.iconContainer} style={{ marginTop: "4px" }}>
          <li>
            <a
              href="https://github.com/smannist"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.githubIcon}
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/smannist/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ width: "40px", height: "40px" }}
                className={styles.linkedinIcon}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.textContainer}>
        <p className={`${styles.me} font-noto`}>
          I am an aspiring Software Developer committed to mastering full-stack
          development and becoming a versatile professional in the field. Other
          passions include artificial intelligence (AI), especially machine
          learning (ML) and LLM integration.
        </p>
      </div>
    </div>
  );
};

export default Header;
