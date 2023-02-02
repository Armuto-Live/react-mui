import React from 'react';
import { AppBar,styled,Toolbar, Typography,InputBase, Button} from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import SearchIcon from '@mui/icons-material/Search';
const StyleToolBar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons=styled("div")(({theme})=>({
  padding:"0px 10px",
  borderRadius: theme.shape.borderRadius,
}));
const Navbar = () => {
  return (
    <AppBar position='static'>
      <StyleToolBar>
        <Typography variant="h6" color="white" sx={{display:{xs:"none",sm:"block"}}}>
          Prueba
        </Typography>
        <AbcIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search>
          <InputBase placeholder='Search'/>
        </Search>
        <Icons>
        <SearchIcon/>
        </Icons>
        <Button variant="text" startIcon={<SearchIcon/>}>
          Search
        </Button>
      </StyleToolBar>
    </AppBar>
  )
}

export default Navbar