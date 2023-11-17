import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

export default function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const navigate  = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="error"></Badge>
        </IconButton>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error"></Badge>
        </IconButton>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="movie"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            Movie List
          </Link>
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <Button color="inherit">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            About
          </Link>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#2E3B55" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            BDFlix
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                activeClass="active"
                to="movie"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                Movie List
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
