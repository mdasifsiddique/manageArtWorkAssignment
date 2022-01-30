import * as React from "react";
import { useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RightOverLay from "../RightOverLay";


import { Divider } from "@mui/material";
import logo from "../../images/logo.png"
import useStyles from './styles'

const SingleProject = ({ post }) => {
  const classes = useStyles();

  const [mountOverlay, setmountOverlay] = useState(true);
  const info=[{primary:"Request Number",secondary:post.id},{primary:"Initiated By",secondary:post.userId},{primary:"Initiated Date",secondary:`${new Date().toLocaleString()}`},{primary:"Product", secondary:post.body.split(" ").slice(0, 2).join(" ")},{ primary:"Component Type", secondary:post.title.split(" ").slice(0, 2).join(" ")}]

  return (
    <div className={classes.listCont}>
      
      <div className={classes.listParent}>
      <img className={classes.logo} src={logo} alt="logo" />
      <List className={classes.list}  sx={{ bgcolor: "background.paper" }} >
          {
            info.map((v,i)=>(
              <ListItem >
                <ListItemText className={classes.listItem} primary={v.primary} secondary={v.secondary} />
              </ListItem>
            ))
          }
        
       
        {/* <ListItem>
          
        </ListItem> */}
      </List>
      <RightOverLay 
              onClick={() => setmountOverlay(true)}
              mountOverlay={mountOverlay}
              setmountOverlay={setmountOverlay}
              post={post}
            >
            </RightOverLay>
    
 

      </div>
      <Divider className={classes.divider}/>
    
      <div className={classes.status}>
        <span style={{color:'red'}}>Status :</span> <span>ArtWork Approved and Released</span>
      </div>
    </div>
  );
};

export default SingleProject;
