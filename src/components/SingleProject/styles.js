import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  logo: {
    height:'8rem',
    width: '8rem',
    [theme.breakpoints.down('sm')]:{
     height:'5.5rem',
     width:'5.5rem',
     marginTop:'0.65rem'
    
      }
  },
  listCont:{
    border: "1px solid rgb(0,0,0,0.1)", 
    borderRadius:'0.4rem',
    marginRight:'0.5rem',
    marginBottom:'1rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  },
  listParent:{
    display:'flex',
   
  },

  list:{
    display:'flex', justifyContent:'space-between', width: "100%",
    marginBottom:0,
    [theme.breakpoints.down('sm')]:{
    display:'block',
  
    }
  },
  listItem:{
    display:'flex',
    flexDirection: 'column',
  gap: '1rem',
  marginBottom:'0px',
  [theme.breakpoints.down('sm')]:{
  gap:0
  }
  },
  divider:{
   marginLeft:'8.5rem'
  },
  status:{
    marginBottom: "10px", 
    marginLeft: "8.5rem",
     marginTop: "10px",
     [theme.breakpoints.down('sm')]:{
      marginLeft:'1rem'
    
      }

  },
  
  
}));