<<<<<<< HEAD
import Navbar from './Navbar';
import { lightTheme } from '../theme/theme';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Providers } from './Providers';
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Providers>
          <Box className="bg-sky-50 h-screen">
            <Navbar />
            <>{children}</>
          </Box>
        </Providers>
      </ThemeProvider>
    </>
  );
};

export default Layout;
=======
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
          <main className="bg-sky-50 h-screen">
            <Navbar />
            <>{children}</>
          </main>
        </Providers>
      </ThemeProvider>
    </>
  );
};

export { Layout };
>>>>>>> 6a838621c4e29462353a997aa677bb2c8f8973f1
