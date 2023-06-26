import { Navbar } from './Navbar';
import { lightTheme } from '../theme/theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Providers } from './Providers';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Providers>
          <Navbar />
          <>{children}</>
        </Providers>
      </ThemeProvider>
    </>
  );
};

export { Layout };
