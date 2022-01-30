import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';

export default makeStyles((theme) => ({
  projHeader: {

    width: '100%',

  },
  
  head: {
    fontSize: '1.5rem',
    color: 'black',
    paddingLeft: '1rem',
    marginBottom: 0,
    marginBottom:'0.5rem'
    // background:'white'
  },
  divInput: {
    background: '#555554',
    height:'2rem',
    display:'flex',
    justifyContent:'end',
    alignItems:'center',
    marginBottom:'0.2rem'
  },
  input: {
    height:'1rem',
    marginRight: '5rem',
    border: '1px solid black',
    borderRadius:'0.2rem',
    [theme.breakpoints.down('sm')]:{
      marginRight: '0.5rem',
    }
  
  }
}));