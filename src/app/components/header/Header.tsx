import { NextComponentType } from "next";

import { RoughNotation } from "react-rough-notation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.css";

const Header: NextComponentType = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.nameContainer}>
        <div className={`${styles.name} font-noto`}>
          <RoughNotation
            type="highlight"
            show={true}
            color="#79c2c7"
            animationDuration={3000}
          >
            <h1>
              Sami <br></br> Männistö
            </h1>
          </RoughNotation>
        </div>
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
