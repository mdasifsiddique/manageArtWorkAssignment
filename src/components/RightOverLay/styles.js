import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  input1: {
    height: 12,
  },
  headCont:{
    display: "flex", 
    justifyContent: "space-between" 
  },
  titleCont:{
    display: "flex",
    marginLeft:'1.5rem',
    [theme.breakpoints.down('sm')]:{
      
    }

  },
  title:{
    [theme.breakpoints.down('sm')]:{
      fontSize:'20px'
    }
  },
  logo: {
    height: '5rem',
    width: '5rem',
    marginRight:'0.4rem',
    marginTop:'0.3rem',
    [theme.breakpoints.down('sm')]:{
      height: '3.5rem',
      width: '3.5rem',
      marginTop:'0.5rem'
    }
   
  },
  closeIcon:{
    marginTop: "1.7rem" ,
    marginRight:'5rem',
    border:0,
    background:'#555554',
    color:'white',
    height:'2rem',
    [theme.breakpoints.down('sm')]:{
  
    marginTop:'1rem',
    marginRight:'2rem',
   
    }

  },
  tabList:{
    marginLeft: "1rem",
  },
textCont:{
  border: "1px solid rgb(0,0,0,0.1)",
  display:'flex',
  flexWrap:'wrap',
  flexBasis:'50%',
  boxShadow:'0px 10px 15px -3px rgba(0,0,0,0.1)'
},
rightIcon:{
  height:'2rem',
  width:'2rem',
  marginBottom:'1.3rem',
  color:'#555554',
  marginTop:'1.1rem'
},
sideWidth:{
  width:786,
  [theme.breakpoints.down('sm')]:{
    width:340,
  }
}

}));