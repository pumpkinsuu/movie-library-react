import {alpha, TextField, styled, IconButton} from "@mui/material";
import {Search, Clear} from '@mui/icons-material';
import {useState} from "react";


const SearchTheme = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <SearchTheme>
      <StyledInputBase
        placeholder="Search…"
        value={value}
        onChange={e => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => setValue("")}
              sx={{ visibility: value ? 'visibility' : 'hidden' }}
            >
              <Clear />
            </IconButton>
          )
        }}
        variant={"standard"}
      />
      <IconButton>
        <Search />
      </IconButton>
    </SearchTheme>
  );
}