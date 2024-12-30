import { NextComponentType } from "next";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer: NextComponentType = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
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
      <Typography
        variant="body2"
        style={{ color: "#6c757d", textAlign: "center" }}
      >
        🚧 This page is unfinished and under development. Stay tuned for
        updates! 🚀
      </Typography>
    </Grid>
  );
};

export default Footer;
