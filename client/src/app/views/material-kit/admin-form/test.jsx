import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from "react-redux";
import { getBrands, createBrand, deleteBrand } from 'app/redux/actions/DataPerangkatActions';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";

const filter = createFilterOptions();

export default function AutoCompleteFormDialog() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBrands());
  }, []);

  const data = useSelector(state => state.dataperangkat);

  const options_menu = [...new Set(data.map(x=>x.brand_name?x.brand_name:""))].map((x) => ({brand_name:x}));
  
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      brand_name: '',
      
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    brand_name: '',
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBrand({brand_name: dialogValue.brand_name}));
    handleClose();
    setValue({
      brand_name: dialogValue.brand_name,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(getBrands());
    console.log(value);
  };

  return (
    <form>
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                brand_name: newValue,
                
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              brand_name: newValue.inputValue,
              
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              brand_name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="brand_name"
        options={options_menu}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.brand_name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.brand_name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Brand Name" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new brand</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any brand in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.brand_name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  brand_name: event.target.value,
                })
              }
              label="Brand Name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                brand_name: newValue,
                
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              brand_name: newValue.inputValue,
              
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              brand_name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="brand_name"
        options={options_menu}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.brand_name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.brand_name}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="Brand Name" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new brand</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any brand in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.brand_name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  brand_name: event.target.value,
                })
              }
              label="Brand Name"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
      <Button color="primary" variant="contained" type="submit" onClick={handleFormSubmit}>
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
      </Button>
    </form>
  );
}

