import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import { getLaptop, deleteLaptop } from "app/redux/actions/DataPerangkatActions";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const TestTable = () => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getLaptop());
  }, []);

  const data = useSelector(state => state.dataperangkat);

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="center">Series</TableCell>
            <TableCell align="center">Processor</TableCell>
            <TableCell align="center">RAM</TableCell>
            <TableCell align="center">Storage</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((laptop) => (
            <TableRow key={laptop.id}>
              <TableCell align="left">{laptop.brand}</TableCell>
              <TableCell align="center">{laptop.series}</TableCell>
              <TableCell align="center">{laptop.processor_type} (Gen {laptop.processor_generation})</TableCell>
              <TableCell align="center">{laptop.ram_type} {laptop.ram_size} GB</TableCell>
              <TableCell align="center">{laptop.storage_type} {laptop.storage_size} GB</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>dispatch(deleteLaptop(laptop.id))}>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default TestTable;
