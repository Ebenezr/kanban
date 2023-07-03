import Navbar from './Navbar';
import { lightTheme } from '../theme/theme';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Providers } from './Providers';

import { styled } from '@mui/system';

const RootContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#F0F7FF',
});
const Container = styled(Box)({
  width: '80vw',
  height: '100vh',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Providers>
          <RootContainer>
            <Container>
              <Navbar />
              <>{children}</>
            </Container>
          </RootContainer>
        </Providers>
      </ThemeProvider>
    </>
  );
};

export default Layout;
