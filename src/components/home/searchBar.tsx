import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const SearchBar = () => {

  const handleSearch=()=>{
    console.log('search')
  }
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #007cf0',
        borderRadius: '9999px',
        padding: '4px 8px',
        width: '100%',
        maxWidth: 500,
        height:40,
        backgroundColor: '#fff',
        marginTop:'20px',
        marginLeft:'50px'
      }}
    >
      <InputBase
        placeholder="Tìm sản phẩm"
        sx={{ ml: 1, flex: 1, color: '#555' }}
      />
      <IconButton sx={{ p: '10px' }}>
        <CameraAltIcon />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: '#007cf0',
          color: 'white',
          '&:hover': { backgroundColor: '#005ecb' },
          ml: 1,
          p: '10px'
        }}
      >
        <SearchIcon onClick={()=>handleSearch()}/>
      </IconButton>
    </Box>
  );
};

export default SearchBar;
