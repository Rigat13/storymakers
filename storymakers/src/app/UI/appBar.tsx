"use client";

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
import ResponsiveDialog from './dialogSignIn';

//import AdbIcon from '@mui/icons-material/Adb';
import {StoryMakersLogoBlack} from './svgComponent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//GTM
import { sendGTMEvent } from '@next/third-parties/google'

import {useLocale, useTranslations} from 'next-intl';
import {useRouter,usePathname,Link} from '../../navigation';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

 function ResponsiveAppBar(props) {

  const t = useTranslations('appBar');

  const locale = useLocale()
  
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
    <AppBar position="static" className='bg-[#D9D9D9]' sx={{maxWidth:'xl'}}>
      <Container maxWidth='xl' className='bg-[#D9D9D9]' >
        <Toolbar disableGutters>
          {/* EJEMPLO MENU DE USUARIO */}

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
 

          <IconButton >   {/* LOGO PC */}
          <Link  href="/">
          <StoryMakersLogoBlack
          sx={{ display: { xs: 'none', md: 'flex',height: 'inherit',width:'60mm' }, mr: 1 }} />
         </Link>
          </IconButton>
         
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {/* MOVIL MENU */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              //color="inherit"
            >
              <MenuIcon sx={{color:'black'}} />
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
              {props.pages.map((page) => (
                
                <MenuItem  key={page.tab} component={Button}  sx={{textTransform:'none'}} >
                
                  <Link  href={page.href}  >       {/* ROUTING SECTIONS */}

                  <Typography  textAlign="center"    >
                  {t(page.tab)}
                  </Typography>

                  </Link>
                   
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <IconButton>  {/* LOGO MOVIL */}
          <Link  href="/">
          <StoryMakersLogoBlack
          sx={{ display: {  xs: 'flex', md: 'none',height: 'inherit',width:'50mm' }, mr: 1 }} />
          </Link>
          </IconButton>
         {/** 
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
          */}
          {/* MOVIL MENU ^ */}

           {/* PC MENU */}
           <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>

          <Box sx={{  display: { xs: 'none', sm:'block',padding: '6px 46px',} }}>         
          
            {props.pages.map((page,i:number) => (
              <Button
                key={page.tab}
                onClick={() => sendGTMEvent({event: 'gtm.linkClick'})}
               
                sx={{ textTransform: 'none', fontWeight:"bold" ,fontFamily:'inherit',
                  color:`${page.color}`

                }}
             
              >
                <Link  href={page.href} key={i} target={i > 1? '_blank':''}  >       {/* ROUTING SECTIONS  href={i==1?'':page.href}  {i==1? <ResponsiveDialogCampañas/> : t(page.tab) }*/}

                {t(page.tab) }
                </Link>
              </Button >
            ))}
            
          </Box>

          <LangMenu languages={props.locales} styleLocales={props.styleLocales} />
                 
          <ResponsiveDialog/> 
         {/* EJEMPLO MENU DE USUARIO */}
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



 function  LangMenu(props) {

  const locale = useLocale();
  
  const router = useRouter();
  const pathname = usePathname();

  let languages= props.languages
  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
   
    setAnchorEl(null);
  };

  const changeLang = (id) =>{
    router.replace({pathname},{locale:id})
  } 
  return (
    <Box sx={{ flexGrow: 0, width:{xs:40, md:'auto'}}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{textTransform: 'none',color:'black',fontFamily:'inherit'}}
        size='small'
        endIcon={open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
      > 
         {props.styleLocales[locale]}
      </Button>
      <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              
      >
        
       { languages.map( (lan:string,i:number) =>{
        return( 
           
          <MenuItem key={i}
          onClick={()=>changeLang(lan)}>
            {props.styleLocales[lan]}</MenuItem>
             
        )}
        
       )}
      
      </Menu>
    </Box>
  );
}