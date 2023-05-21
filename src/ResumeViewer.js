import React from 'react';
import { Box } from '@mui/material';
import resume from './assets/resume.png'
import SectionHeading from './SectionHeading';
function ResumeViewer() {
  return (
    <Box>
    <SectionHeading sectionHeading="RESUME"/>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="auto"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
      marginTop="50px"
    >
      <img
        src={`${resume}`}// Replace with the actual path to your A4 size image
        alt="Resume"
        style={{
          width: '100%',
          height: 'auto ',
          borderRadius: '30px',
          borderColor: "#66b2ff",
          borderWidth: "5px",
          borderStyle: "solid",
        }}
      />
    </Box>
    </Box>
  );
}

export default ResumeViewer;
