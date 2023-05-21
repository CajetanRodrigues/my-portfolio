import React from 'react';
import { styled } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useInView } from "react-intersection-observer";


const categories = [
  'Programming Languages',
  'Web Technologies',
  'Databases',
  'Cloud',
  'Miscellaneous',
];

const skills = [
  [
    'Python',
    'Javascript',
    'Java',
  ],
  [
    'React.js',
    'Redux',
    'ExpressJS',
    'Node.js',
    'HTML5',
    'CSS3',
  ],
  [
    'MySQL',
    'PL/SQL',
    'MongoDB',
    'Neo4j',
  ],
  [
    'Amazon Web Services (EC2)',
    'RDS',
    'S3',
    'Lambda',
    'Cloudwatch',
  ],
  [
    'Agile Methods',
    'Git',
    'JIRA',
    'Project Management',
    'Android Studio',
  ],
];

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  backgroundColor: 'transparent',
  marginBottom: '20px',
  overflowX: 'auto',
}));

const TableStyled = styled(Table)(({ theme }) => ({
  border: `2px solid #66b2ff`,
  color: theme.palette.common.white,
  tableLayout: 'auto',
}));

const TableCellStyled = styled(TableCell)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.common.white,
  fontWeight: 'bolder',
}));

const ChipStyled = styled(Chip)(({ theme }) => ({
  color: 'white',
  fontWeight: 'bolder',
  border: `2px solid #66b2ff`,
  margin: theme.spacing(0.5),
  backgroundColor: '#011e3c',
  marginBottom: theme.spacing(0.5),
  '&:last-child': {
    marginBottom: 0,
  },
}));

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6, // Adjust the threshold as per your preference
  });

  const isSmallScreen = window.innerWidth <= 600; // Adjust the breakpoint as per your preference

  return (
    <TableContainerStyled ref={ref} component={Paper} 
    sx={{
      opacity: inView ? 1 : 0,
      transform: `translateX(${inView ? 0 : "-50px"})`,
      transition: "opacity 0.8s ease, transform 0.8s ease",
    }}>
      <TableStyled>
        <TableBody>
          {categories.map((category, index) => {
            if (isSmallScreen) {
              return (
                <React.Fragment key={category}>
                  <TableRow>
                    <TableCellStyled>{category}</TableCellStyled>
                  </TableRow>
                  <TableRow>
                    <TableCellStyled>
                      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {skills[index].map((skill) => (
                          <ChipStyled key={skill} label={skill} />
                        ))}
                      </div>
                    </TableCellStyled>
                  </TableRow>
                </React.Fragment>
              );
            } else {
              return (
                <TableRow key={category}>
                  <TableCellStyled>{category}</TableCellStyled>
                  <TableCellStyled>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {skills[index].map((skill) => (
                        <ChipStyled key={skill} label={skill} size='small' />
                      ))}
                    </div>
                  </TableCellStyled>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </TableStyled>
    </TableContainerStyled>
  );
};

export default Skills;
