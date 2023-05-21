import React from "react";
import { Typography, Paper } from "@mui/material";
import { useInView } from "react-intersection-observer";

const SectionHeading = ({sectionHeading}) => {
    // console.log('Seciton title is : ', sectionHeading)
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as per your preference
      });
  return (
    <Paper ref={ref} elevation={3} sx={{ backgroundColor: "#011e3c", 
            opacity: inView ? 1 : 0,
            transform: `translateX(${inView ? 0 : "-50px"})`,
            transition: "opacity 0.8s ease, transform 0.8s ease",
        borderRadius: '20px'}}
            >
      <Typography
        variant="h3"
        className="lightblue-text"
        sx={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        {sectionHeading}
      </Typography>
    </Paper>
  );
};

export default SectionHeading;
