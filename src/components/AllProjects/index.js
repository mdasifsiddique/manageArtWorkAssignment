import React, { useState, useEffect } from 'react';
import ProjectContainer from '../ProjectContainer';
import { Divider } from '@mui/material';
import useStyles from './styles';
import { useContext } from 'react';
import { userContext } from '../../App';


const AllProjects = () => {
  const classes = useStyles();

  const { data, setData, posts, setPosts, filval } = useContext(userContext);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    if (!searchTerm) {
      setPosts(data);
      return;
    }
    const filval = data.filter((p) => Number(p.id) == (Number(searchTerm)))
    setPosts(filval)

  }, [searchTerm]);
 



  return <div className={classes.projHeader} >
    <div className={classes.proj}>
          <h2 className={classes.head}>All Projects</h2>
          <div className={classes.divInput}>
            <input className={classes.input} type="text" placeholder='Search Request Number' onChange={(e) => setSearchTerm(e.target.value)}></input>
          </div>

    </div>
    <Divider />
    <div>
      <ProjectContainer />

    </div>

  </div>;
};

export default AllProjects;
