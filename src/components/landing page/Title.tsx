import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/main_logo.svg";

export const TitleImage: React.FC = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 8, sm: 10, md: 12 },
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="QuackHacks Dark Logo"
        sx={{
          width: "auto",
          maxWidth: { xs: "70%", sm: "60%", md: "50%", lg: "40%" },
          height: "auto",
          mb: { xs: 4, sm: 5, md: 6 },
        }}
      />

      <Typography
        variant="h4"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "1rem",
          fontFamily: '"Liebling", ui-sans-serif, system-ui, sans-serif',
          color: "black",
          fontWeight: 500,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          px: { xs: 2, md: 4 },
          py: { xs: 1, md: 1.5 },
        }}
      >
        November 15 &amp; 16 | EMU Ballroom
      </Typography>

    </Box>
  );
};

export default TitleImage;
