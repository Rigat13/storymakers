import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useTranslations} from 'next-intl';
//GTM
import { sendGTMEvent } from '@next/third-parties/google'

export default function ResponsiveDialog() {
  const t = useTranslations('appBar');

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
    sendGTMEvent({event: 'gtm.linkClick'})
    console.log('helloo')
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained"  role={undefined} 
            sx={{backgroundColor:'#000000!important',
              boxShadow:"none",
              textTransform: 'none',
              fontFamily:'inherit',
              display:{xs:'none', md:'flex',}
            }}
            onClick={handleClickOpen}
            > {t('iniciar_sesion')}</Button>


            {/* BOTÓN INICIAR SESION EN MOVIL */}  
          <IconButton sx={{ display:{xs:'flex', md:'none'}}}
           onClick={handleClickOpen}
          >
            <AccountCircleIcon fontSize="large" sx={{color:'black'}}/>
          </IconButton>  
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t('aviso')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         {t('sign_in_dialog')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  href='https://tally.so/r/n9vM7p'
          target='_blank'
          variant='contained' onClick={handleClose} autoFocus 
          sx={{textTransform:'none', color:'white', backgroundColor:'black!important'}}>
            {t('okay')}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


/*

export  function ResponsiveDialogCampañas() {
  const t = useTranslations('appBar');

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
    sendGTMEvent({event: 'gtm.linkClick'})
    console.log('helloo')
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       <Button
                onClick={handleClickOpen} 
                sx={{ textTransform: 'none', fontWeight:"bold" ,fontFamily:'inherit',
                  color:'black'
                }}
             
              >
                    

                {t('retos')}              
              </Button >
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t('aviso')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         {t('sign_in_dialog')}
          </DialogContentText>
        </DialogContent>
        <DialogActions   >
       
          <Button  href='https://tally.so/r/n9vM7p'
          target='_blank'
          variant='contained'
          //onClick={handleClose} 
           autoFocus 
          sx={{textTransform:'none', color:'white', backgroundColor:'black!important'}}>
            {t('okay')}
          </Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


 */