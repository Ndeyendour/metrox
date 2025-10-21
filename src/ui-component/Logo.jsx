// material-ui
import { useTheme } from '@mui/material/styles';

// import de tes logos
import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/logo.svg';

// ==============================|| LOGO IMAGE ||============================== //

export default function Logo() {
  const theme = useTheme();

  // Détection du mode clair/sombre
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <img
      src={isDarkMode ? logoDark : logo}
      alt="TonLogo"
      width="100"
      style={{ display: 'block', height: 'auto' }}
    />
  );
}
