import React from "react";
import { Typography, useTheme, Grid, Box } from "@mui/material";
import "./LandingPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { experiences } from "./constants.js";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
const Experiences = () => {
  const theme = useTheme();
  return (
    <Box>
        <SectionHeading sectionHeading="Experiences"/>
            
      {experiences.map((card, index) => (
        <CardItem key={index} card={card} index={index} />
      ))}
    </Box>
  );
};

const CardItem = ({ card, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6, // Adjust the threshold as per your preference
  });

  return (
    <Card
      ref={ref}
      sx={{
        display: "flex",
        backgroundColor: "#011e3c",
        margin: "20px 0px",
        borderColor: "#66b2ff",
        borderWidth: "1px",
        borderRadius: '20px',
        borderStyle: "solid",
        opacity: inView ? 1 : 0,
        transform: `translateX(${inView ? 0 : "-50px"})`,
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
      className="card"
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12} md={2}
        sx={{
            backgroundColor: "#011e3c",
            borderRight: "1px solid #66b2ff",
          }}>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
            }}
            image={card.image} // Use require with .default
            alt="Company Logo"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {card.role}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontWeight: "bold", color: "#66b2ff" }}
            >
              {card.location}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ color: "white" }}
            >
              {card.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Experiences;
