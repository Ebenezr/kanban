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
