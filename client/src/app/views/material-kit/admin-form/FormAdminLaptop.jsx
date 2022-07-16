import {
  Button,
  Grid,
  Icon,
  styled,
} from "@mui/material";
import * as React from 'react';
import { Span } from "app/components/Typography";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { getLaptop, createLaptop, deleteLaptop  } from "app/redux/actions/DataPerangkatActions";
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const FormAdminLaptop = () => {
  React.useEffect(() => {
    dispatch(getLaptop());
  }, []);

  const filter = createFilterOptions();

  const data = useSelector(state => state.dataperangkat);

  const dispatch = useDispatch();


  const [state, setState] = React.useState({});
  const [valueBrand, setValueBrand] = React.useState(null);
  const [valueSeries, setValueSeries] = React.useState(null);

  const options_brand = [...new Set(data.map(x=>x.brand?x.brand:""))].map((x) => ({brand:x}));
  const options_series = valueBrand?([...new Set((data.filter(x=>x.brand==valueBrand.brand)).map(x=>x.series))].map(x=>({series:x}))):[...new Set(data.map(x=>x.series?x.series:""))].map((x) => ({series:x}));;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createLaptop({...state, ...valueBrand, ...valueSeries}));
    setState({});
    setValueBrand("");
    setValueSeries("");
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const {
    brand,
    series,
    processor_type,
    processor_generation,
    ram_type,
    ram_size,
    storage_type,
    storage_size,
    graphics_type,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <Autocomplete
              value={valueBrand}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  setValueBrand({
                    brand: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValueBrand({
                    brand: newValue.inputValue},
                  );
                } else {
                  setValueBrand(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.brand);
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    brand: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="brand"
              options={options_brand}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.brand;
              }}
              renderOption={(props, option) => <li {...props}>{option.brand}</li>}
              sx={{ width: "100%" }}
              freeSolo
              renderInput={(params) => (
                <TextField errorMessages={["this field is required"]} validators={["required"]} {...params} label="Brand"/>
              )}
            />

            <Autocomplete
              value={valueSeries}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  setValueSeries({
                    series: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setValueSeries({
                    series: newValue.inputValue,
                  });
                } else {
                  setValueSeries(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.series);
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    series: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id="series"
              // options={options_series}
              options = {options_series}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.series;
              }}
              renderOption={(props, option) => <li {...props}>{option.series}</li>}
              sx={{ width: "100%" }}
              freeSolo
              renderInput={(params) => (
                <TextField errorMessages={["this field is required"]} validators={["required"]} {...params} label="Series" />
              )}
            />
         
            <TextField
              type="text"
              name="processor_type"
              label="Processor Type"
              value={processor_type || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="number"
              name="processor_generation"
              value={processor_generation || ""}
              label="Processor Generation"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="text"
              name="graphics_type"
              value={graphics_type || ""}
              label="Graphics Type"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
          
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            
            <TextField
              type="text"
              name="ram_type"
              value={ram_type || ""}
              label="RAM Type"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="number"
              name="ram_size"
              value={ram_size || ""}
              label="RAM Size"
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">GB</InputAdornment>,
              }}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="text"
              name="storage_type"
              value={storage_type || ""}
              label="Storage Type"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="number"
              name="storage_size"
              value={storage_size || ""}
              label="Storage Size"
              onChange={handleChange}
              InputProps={{
                endAdornment: <InputAdornment position="end">GB</InputAdornment>,
              }}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

          </Grid>
        </Grid>

        <Button onClick={handleSubmit} color="primary" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

const top100Films = [
  { brand: 'The Shawshank Redemption'},
  { brand: 'The Godfather'} ]

  const top100series = [
    { series: 'The Sern'},
    { series: 'The Grer'} ]

export default FormAdminLaptop;
