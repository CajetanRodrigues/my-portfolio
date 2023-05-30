import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useScrollTrigger,
  Zoom,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Link } from "react-scroll";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";

const ScrollTopButton = ({ trigger }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{ position: "fixed", bottom: 16, right: 16, zIndex: 100 }}
      >
        <IconButton size="large" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ color: "white", fontWeight: "bold" }} />
        </IconButton>
      </div>
    </Zoom>
  );
};

const AppMenuBar = () => {
  const [scrollTopTrigger, setScrollTopTrigger] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scrollTriggerValue = 200; // Adjust the value to control when the button appears

    setScrollTopTrigger(scrollTop > scrollTriggerValue);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{ backgroundColor: "#011e3c" }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          {isMobile ? (
            <>
                          <Link
                activeClass="active"
                to="landing-page"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "auto"
                }}
              >
                Portfolio
              </Link>
              <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            </>
            
          ) : (
            <>
              <Link
                activeClass="active"
                to="landing-page"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "auto"
                }}
              >
                Portfolio
              </Link>
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "16px"
                }}
              >
                Experiences
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "16px"
                }}
              >
                Skills
              </Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "16px"
                }}
              >
                Education
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "white",
                  marginRight: "16px"
                }}
              >
                Projects
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "black",
                  marginRight: "16px"
                }}
              >
                Experiences
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "black",
                  marginRight: "16px"
                }}
              >
                Skills
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "black",
                  marginRight: "16px"
                }}
              >
                Education
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer(false)}>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "black",
                  marginRight: "16px"
                }}
              >
                Projects
              </Link>
            </ListItem>
          </List>
        </Drawer>
      )}
      <ScrollTopButton sx={{ color: "white" }} trigger={scrollTopTrigger} />
    </>
  );
};

export default AppMenuBar;
