import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMedia = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust the threshold as per your preference
  });
  const isSmall = window.innerWidth <= 600
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent= {isSmall ? 'center':'flex-end'}
        alignItems="center"
        spacing={5}
        ref={ref}
        sx={{
            opacity: inView ? 1 : 0,
        transform: `translateX(${inView ? 0 : "-50px"})`,
        transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Grid item>
        <a href="https://www.linkedin.com/in/rodriguescajetan" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon style={{ fontSize: 40, color: "#0077B5" }} />
</a>
        </Grid>
        <Grid item>
        <a href="https://github.com/CajetanRodrigues" target="_blank" rel="noopener noreferrer">
          <GitHubIcon
            style={{ fontSize: 40, color: "#6cc644" }}
          /> 
          </a>
          
        </Grid>
        <Grid item>
        <a href="https://www.instagram.com/rodrigs.caje/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon
            style={{ fontSize: 40, color: "#E1306C" }}
          /> 
        </a>

        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialMedia;
