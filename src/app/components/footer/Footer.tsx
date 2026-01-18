import Grid from "@mui/material/Grid2";
import { NextComponentType } from "next";
import { Typography } from "@mui/material";

const Footer: NextComponentType = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={1}
      style={{
        padding: "1rem",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #ddd",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#79c2c7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "14px",
          fontFamily: "var(--font-opensans)"
        }}
      >
        SM
      </div>
      <Typography
        variant="body2"
        style={{
          color: "#6c757d",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: "var(--font-opensans)"
        }}
      >
        <span style={{ fontWeight: 500, color: "#495057" }}>
          Sami Männistö
        </span>
        <span>©</span>
        <span>2026</span>
      </Typography>
    </Grid>
  );
};

export default Footer;
