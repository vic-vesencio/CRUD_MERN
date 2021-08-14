import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosDefault from '../config/axiosConfig';

//Components
import Appbar from '../MainComponents/Appbar';

//Material UI
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from "@material-ui/core/CssBaseline";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Todos = (props) => {
   const [todos, setTodos] = useState(null);
   useEffect(()=>{
      if(todos === null){
         axios.get(axiosDefault.apiURL+'/api/todos/get-all/', {crossdomain: true})
         .then(function (res) {
            console.log(res)
            setTodos(res.data)
         })
         .catch(function (err) {
            console.log(err)
         }) 
      }
   });

   return (
      <div>
         <Appbar centerTitle={'Todos'} />
         <CssBaseline />
         <Container color="primary" maxWidth="md">
            <Typography variant="h6">
               Todos
            </Typography>

            <TableContainer theme='primary' component={Paper}>
               <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell component="th">Description</TableCell>
                     <TableCell align="right"></TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>

                  {todos !== null ?
                     todos.map((todo) => (
                        <TableRow key={todo._id}>
                           <TableCell component="th" scope="row">
                              {todo.description}
                           </TableCell>
                           <TableCell align="right">
                              <Button>view</Button>
                           </TableCell>
                        </TableRow>
                     ))
                     :
                     <TableRow>
                        <TableCell component="th" scope="row">
                           no todos yet
                        </TableCell>
                     </TableRow>
                  }
               </TableBody>
               </Table>
            </TableContainer>
         </Container>
      </div>
   );
}

export default Todos;
