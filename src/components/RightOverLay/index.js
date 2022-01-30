import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { GiHamburgerMenu } from "react-icons/gi";
import useStyles from "./styles"
import logo from "../../images/logo.png"



const RightOverLay = ({ post, mountOverlay, setmountOverlay }) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [value, setValue] = React.useState("1");
  const classes = useStyles();

  const info = [
    { label: "Request Number", value: post.id },
    { label: "Initiated By", value: post.userId },
    { label: "Initiated by", value: `${new Date().toLocaleString()}` },
    { label: "category", value: post.title.split(" ").slice(0, 3).join(" ") },
    { label: "Brand", value: post.title.split(" ").slice(0, 3).join(" ") },
    {
      label: "Product Name",
      value: post.body.split(" ").slice(0, 2).join(" "),
    },
    { label: "Pack Size", value: post.title.split(" ").slice(0, 3).join(" ") },
    {
      label: "Component Type",
      value: post.title.split(" ").slice(0, 2).join(" "),
    },
    {
      label: "component Code",
      value: post.title.split(" ").slice(0, 3).join(" "),
    },
  ];

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOverLay = () => {
    setmountOverlay(false);
    setShowOverlay(false);
  };

  const toggleDrawer = (event, bool) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowOverlay(bool);
    setmountOverlay(bool);
  };


console.log(window.innerWidth);
  const list = () => (
    <Box 
    className={classes.sideWidth}
    role="presentation">

      <div className={classes.headCont}>
        <div className={classes.titleCont}>
          <img className={classes.logo} src={logo} alt="logo" />
          <h1 className={classes.title}>{post.title.split(" ").slice(0, 3).join(" ")}</h1>
        </div>
        <button type="button" className={classes.closeIcon} onClick={() => handleOverLay()}><CloseIcon  /></button>
      </div>


      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>

          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList className={classes.tabList} onChange={handleTabChange} >
              <Tab label="Info" value="1" />
              <Tab label="Files" value="2" />
              <Tab label="Stake Holder" value="3" />
              <Tab label="Activity log" value="4" />
            </TabList>
          </Box>


          
            <TabPanel value="1">
              <Box sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }} autoComplete="on" >
                <div className={classes.textCont} >
                  {info.map((v, i) => (
                    <TextField key={i} size="small" InputProps={{ classes: { input: classes.input1 }}} id="outlined-required" label={v.label} defaultValue={v.value}   
                    InputLabelProps={{
                      sx: {
                        color: "red",
                      }
                    }} />
                  ))}
                </div>
              </Box>
            </TabPanel>
            <TabPanel value="2">Files</TabPanel>
            <TabPanel value="3">Stake Holder</TabPanel>
            <TabPanel value="4">Activity Log</TabPanel>
        
        </TabContext>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button onClick={(event) => toggleDrawer(event, true)}>
        <GiHamburgerMenu className={classes.rightIcon} />
      </Button>

      {mountOverlay && (
        <Drawer
          anchor="right"
          open={showOverlay}
          onClose={(event) => toggleDrawer(event, false)}
        >
          {list()}
        </Drawer>
      )}
    </div>
  );
};

export default RightOverLay;
