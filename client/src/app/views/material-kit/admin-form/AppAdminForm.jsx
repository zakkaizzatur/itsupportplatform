import { InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import StepperForm from "./StepperForm";
import FormAdminLaptop from "./FormAdminLaptop";
import AutoCompleteFormDialog from "./test";
import LaptopPCTable from "../tables/TestMaterialTable";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getType } from "app/redux/actions/DataPerangkatActions";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppAdminForm = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getType());
  },);

  const data = useSelector(state => state.dataperangkat);

  const type_options = (data.map(x => x.type_name));

  const [type, setType] = useState('');

  const handleChange = (e) => {
    setType(e.target.value);
  }

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>

        <SimpleCard>
          <TextField label="Asset Type" labelId="type_select" id="type_select" value={type} onChange={handleChange} fullWidth select>
            {type_options.map((item, i)=>{
              return(
                <MenuItem key={i} value={item}>{item}</MenuItem>
              )
            })}
          </TextField>
        </SimpleCard>

        <SimpleCard title="Admin Laptop">
          <FormAdminLaptop />
        </SimpleCard>

        <SimpleCard>
          <LaptopPCTable />
        </SimpleCard>

      </Stack>
    </Container>
  );
};

export default AppAdminForm;
