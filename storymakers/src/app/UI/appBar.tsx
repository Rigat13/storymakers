import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { SvgIcon } from '@mui/material';
import {ListItem}from '@mui/material';
import {Divider}from '@mui/material';
import LogoLargo from '../../../public/logo_largo.svg';

import { sendGTMEvent } from '@next/third-parties/google'

/*import SmLogo from '../../../public/sm_logo.svg';
const StoryMakersLogo = (props) => (
  <SvgIcon component={SmLogo} viewBox="0 0 800 800" width="700" height="700" {...props} />
  )
*/

const StoryMakersLogo = (props) => (
<SvgIcon component={LogoLargo} viewBox="0 0 315 50" {...props} />
)
//['Products', 'Pricing', 'Blog'];

const pages = [{"tab":"Conócenos", "href":"/about"},  
               {"tab":"Retos", "href":"/retos"},
              {"tab":"Actualidad", "href":"/blog"},
              {"tab":"Contacto", "href":"/contact"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" >
      <Container maxWidth="xl" className='bg-[#D9D9D9]'>
        <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>          
          */}
 
          <IconButton href="/">
          <StoryMakersLogo 
          sx={{ display: { xs: 'none', md: 'flex',height: 'inherit',width:'60mm' }, mr: 1 }} />
          </IconButton>
         
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {/* MOVIL MENU */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }} 
            > 
              {pages.map((page) => (
                
                <MenuItem  key={page.tab} onClick={handleCloseNavMenu}>
                  <Typography  textAlign="center">
                    
                    {page.tab}
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

                                          
         <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> 
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* MOVIL MENU ^ */}

           {/* PC MENU */}
           <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>

          <Box sx={{  display: { xs: 'none', sm:'block',padding: '6px 46px',} }}>         
          
            {pages.map((page) => (
              <Button
                key={page.tab}
                onClick={() => sendGTMEvent({event: 'gtm.linkClick'})}
                sx={{ color: 'black' , textTransform: 'none', fontWeight:"bold" }}
                href={page.href}  // ROUTING SECTIONS
                
              >
                {page.tab}
                
              </Button >
            ))}
          </Box>

          <Button variant="contained" className='bg-black hover:bg-[#262728]'
          sx={{
              boxShadow:"none",
              textTransform: 'none',

          }}
          
          onClick={() => sendGTMEvent({event: 'gtm.linkClick'})}
          >
            Iniciar Sesión
            </Button>  

         {/*   
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          */} 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
