import React from "react";
import { Typography, Grid, Box, Button, useMediaQuery, useTheme } from "@mui/material";
import "./LandingPage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
const CustomCard = ({customListName, customList}) => {
  return (
    <Box>
        <SectionHeading sectionHeading={customListName}/>
            
      {customList.map((card, index) => (
        <CustomCardItem key={index} card={card} index={index} customListName={customListName} />
      ))}
    </Box>
  );
};

const CustomCardItem = ({ card, customListName, index}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6, // Adjust the threshold as per your preference
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Grid item xs={3} md={2}
        sx={{
          backgroundColor: "#011e3c",
          borderRight: "1px solid #66b2ff",
          width: "auto", // Set width to "auto"
          height: "auto", // Set height to "auto"
          }}>
          <CardMedia
    component="img"
    sx={{
      width: "100%",
      height: "100%",
      objectFit: customListName === 'Projects' ? 'fit' : 'contain', // Add objectFit property with "contain" value
    }}
    image={card.image}
    alt="Company Logo"
  />
        </Grid>
        <Grid item xs={9} md={10}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {!isMobile ? (<Typography
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {card.title}
            </Typography>) : (<Typography
              component="div"
              variant="h6"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {card.title}
            </Typography>)}
            
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontWeight: "bold", color: "#66b2ff" }}
            >
              {card.subtitle}
            </Typography>
            {!isMobile && (
                         <Typography
                         variant="body2"
                         color="text.secondary"
                         component="div"
                         sx={{ color: "white" }}
                       >
                         {card.description}
                       </Typography> 
            )}

            {card.link && (
              <a href={card.link} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" sx={{marginTop: '10px'}}>View Project</Button>
            </a>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CustomCard;
