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
