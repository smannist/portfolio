import styles from "./Header.module.css";
import { NextComponentType } from "next";
import { RoughNotation } from "react-rough-notation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          I am a Software Developer committed to mastering full-stack
          development and becoming a versatile professional in the field. My other
          passions include artificial intelligence (AI). To know a bit more about me, try asking the AI at the bottom of the page.
        </p>
      </div>
    </div>
  );
};

export default Header;
