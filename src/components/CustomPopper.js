import { Popper } from '@mui/material';
import { styled } from '@mui/system';

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1300,
  '& .MuiAutocomplete-popper': {
    marginTop: 0,
  },
  '& .MuiAutocomplete-listbox': {
    backgroundColor: "burlywood",
  },
}));

const CustomPopper = (props) => {
  return <StyledPopper {...props} placement="bottom" />;
};

export default CustomPopper;
