import { NextComponentType } from "next";

const Footer: NextComponentType = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: "0.9rem",
        color: "#6c757d",
        textAlign: "center"
      }}
    >
      <p>
        🚧 This page is unfinished and under development. Stay tuned for
        updates! 🚀
      </p>
    </footer>
  );
};

export default Footer;
