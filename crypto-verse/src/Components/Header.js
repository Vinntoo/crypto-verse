import { AppBar, Toolbar, Container, Typography  } from '@material-ui/core';
import React from 'react';

const Header = () => {
  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography>
            Cryptoverse
          </Typography>
        </Toolbar>
      </Container>

    </AppBar>
  )
}

export default Header