import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Appbar from '../MainComponents/Appbar';

const Todos = (props) => {

  return (
   <div>
      <Appbar centerTitle={'Todos'} />
      <Container maxWidth="md">
         <Typography variant="h6">
            Todos
         </Typography>
      </Container>
   </div>
  );
}

export default Todos;
