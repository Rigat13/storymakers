import { SvgIcon } from '@mui/material';


//logos
import LogoJuntoOscuro from '../../../public/logos/recurso_5.svg';
import LogoJuntoBlanco from '../../../public/logos/recurso_11.svg';
import StoryLogo from '../../../public/logos/story.svg';
import MakersLogo from '../../../public/logos/makers.svg';
//elementos
import divisorFooter from '../../../public/elementos/divisorFooter.svg';
//import ellipse from '../../../public/elementos/ellipse.svg';
//import ellipseOrange from '../../../public/elementos/ellipseOrange.svg';

// LOGOS 
export const StoryMakersLogoBlack = (props) => (
  <SvgIcon component={LogoJuntoOscuro} viewBox="0 0 3422 564" {...props} />
  )

  

export const StoryMakersLogoWhite = (props) => (
  <SvgIcon component={LogoJuntoBlanco} viewBox="0 0 3422 564" {...props} />
  )

export const StoryLogoOnly = (props) => (
  <SvgIcon component={StoryLogo} viewBox="0 0 363 136" {...props} />
  )


export const MakersLogoOnly = (props) => (
    <SvgIcon component={MakersLogo} viewBox="0 0 537 120" {...props} />
    )


// ELEMENTOS SVG

export const DivisorFooterSVG = (props) => (

  <SvgIcon component={divisorFooter} viewBox="0 0 1440 42"  {...props} />
)


/*
export const Ellipse = (props) => (

  <SvgIcon component={ellipse} viewBox="0 0 1440 2456"  {...props} />
)


export const EllipseOrange = (props) => (

  <SvgIcon component={ellipseOrange} viewBox="0 0 1040 1000"   {...props} />
)

*/

/*
import LogoLargo from '../../../public/logos/logo_largo.svg';
const StoryMakersLogo = (props) => (
  <SvgIcon component={LogoLargo} viewBox="0 0 315 50" {...props} />
  )*/

/*import SmLogo from '../../../public/sm_logo.svg';
const StoryMakersLogo = (props) => (
  <SvgIcon component={SmLogo} viewBox="0 0 800 800" width="700" height="700" {...props} />
  )
*/


