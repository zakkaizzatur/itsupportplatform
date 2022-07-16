import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
// import './LaptopPCTable.css';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { createLaptop, deleteLaptop, getLaptop, updateLaptop } from 'app/redux/actions/DataPerangkatActions';
import Select from "react-select";
import AsyncSelect, { useAsync } from 'react-select/async';



const LaptopPCTable = () => {

  const [user, setUser] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [valueBrand, setValueBrand] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getLaptop());
  }, []);

  const data = useSelector(state => state.dataperangkat);

  React.useEffect(() => {
    setUser(data);
  }, [data]);

  const options_brand = [...new Set(data.map(x=>x.brand?x.brand:""))].map((x) => ({value:x, label:x}));
  const options_series = valueBrand?([...new Set((data.filter(x=>x.brand==valueBrand.value)).map(x=>x.series))].map(x=>({value:x, label:x}))):[...new Set(data.map(x=>x.series?x.series:""))].map((x) => ({value:x, label:x}));
  const options_processor_type = [...new Set(data.map(x=>x.processor_type?x.processor_type:""))].map((x) => ({value:x, label:x}));
  const options_processor_generation = [...new Set(data.map(x=>x.processor_generation?x.processor_generation:""))].map((x) => ({value:x, label:x}));
  const options_ram_type = [...new Set(data.map(x=>x.ram_type?x.ram_type:""))].map((x) => ({value:x, label:x}));
  const options_ram_size = [...new Set(data.map(x=>x.ram_size?x.ram_size:""))].map((x) => ({value:x, label:x}));
  const options_storage_type = [...new Set(data.map(x=>x.storage_type?x.storage_type:""))].map((x) => ({value:x, label:x}));
  const options_storage_size = [...new Set(data.map(x=>x.storage_size?x.storage_size:""))].map((x) => ({value:x, label:x}));
  const options_graphics_type = [...new Set(data.map(x=>x.graphics_type?x.graphics_type:""))].map((x) => ({value:x, label:x}));

  const placeholderStyles = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            fontSize: 10,
        }
    }
}

  let columns = [
    { title: 'BRAND', field: 'brand', cellStyle: {textAlign: "center"}, editComponent: ({ value, onRowDataChange, rowData }) => (
      <Select
        options={options_brand}
        name="brand_select"
        onChange={(e) => {
          onRowDataChange({
            ...rowData,
            brand: (e.value)
          })
        }}
        value={value ? value.value : value}
        placeholder="Select a brand"
        styles={placeholderStyles}
      />
      )},
    { title: 'SERIES', field: 'series' , cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange, rowData}) => (
      <Select
        options={rowData?([...new Set((data.filter(x=>x.brand==rowData.brand)).map(x=>x.series))].map(x=>({value:x, label:x}))):[...new Set(data.map(x=>x.series?x.series:""))].map((x) => ({value:x, label:x}))}
        name="series_select"
        onChange={(selectedOption) => onChange(selectedOption.value)}
        value={value ? value.value : value}
        placeholder="Select a series"
        styles={placeholderStyles}
      />) },
    { title: 'PROCESSOR\nTYPE', field: 'processor_type', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_processor_type}
      name="processor_type_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select processor type"
      styles={placeholderStyles}
      />
    ) },
    { title: 'PROCESSOR\nGENERATION', field: 'processor_generation', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_processor_generation}
      name="processor_generation_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select processor generation"
      styles={placeholderStyles}
      />
    ) },
    { title: 'RAM\nTYPE', field: 'ram_type', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_ram_type}
      name="ram_type_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select RAM type"
      styles={placeholderStyles}
      />
    ) },
    { title: 'RAM\nSIZE', field: 'ram_size', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_ram_size}
      name="processor_size_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select RAM size"
      styles={placeholderStyles}
      />
    ) },
    { title: 'STORAGE\nTYPE', field: 'storage_type', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_storage_type}
      name="storage_type_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select storage type"
      styles={placeholderStyles}
      />
    ) },
    { title: 'STORAGE\nSIZE', field: 'storage_size', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_storage_size}
      name="storage_size_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select storage size"
      styles={placeholderStyles}
      />
    ) },
    { title: 'GRAPHICS\nTYPE', field: 'graphics_type', cellStyle: {textAlign: "center"}, editComponent: ({ value, onChange }) => (
      <Select
      options={options_graphics_type}
      name="graphics_type_select"
      onChange={(selectedOption) => onChange(selectedOption.value)}
      value={value ? value.value : value}
      placeholder="Select graphics type"
      styles={placeholderStyles}
      />
    ) },
  ]

  // let data = [
  //   { brand: 'manish', series: 'traptrick', processor_type: 'themk85@gmail.com', processor_generation: '9999999999', ram_type: 'https://github.com/traptrick' }
  // ]  

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const users = res.data;
  //       setUser(users);
  //       // console.log(users);
  //     })
  // }, [])

    //function for updating the existing row details
  const handleRowUpdate = (newData, oldData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.brand === "") {
      errorList.push("Try Again, You didn't enter the brand field")
    }
    if (newData.series === "") {
      errorList.push("Try Again, You didn't enter the series field")
    }
    if (newData.processor_type === "") {
      errorList.push("Oops!!! Please enter a valid processor type")
    }
    if (newData.processor_generation === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.ram_type === "") {
      errorList.push("Try Again, Enter RAM type before submitting")
    }
    if (newData.ram_size === "") {
      errorList.push("Try Again, Enter RAM size before submitting")
    }
    if (newData.storage_type === "") {
      errorList.push("Try Again, Enter storage type before submitting")
    }
    if (newData.storage_size === "") {
      errorList.push("Try Again, Enter storage type before submitting")
    }

    if (errorList.length < 1) {
      // axios.put(`https://jsonplaceholder.typicode.com/users/${newData.id}`, newData)
      //   .then(response => {
      //     const updateUser = [...user];
      //     const index = oldData.tableData.id;
      //     updateUser[index] = newData;
      //     setUser([...updateUser]);
      //     resolve()
      //     setIserror(false)
      //     setErrorMessages([])
      //   })
      //   .catch(error => {
      //     setErrorMessages(["Update failed! Server error"])
      //     setIserror(true)
      //     resolve()

      //   })
        try {
          dispatch(updateLaptop(newData.id, newData));
          const updateUser = [...user];
          const index = oldData.tableData.id;
          updateUser[index] = newData;
          setUser(updateUser);
          resolve()
          setIserror(false)
          setErrorMessages([])
        } catch (error) {
          setErrorMessages(["Update failed! Server error"])
          setIserror(true)
          resolve()
        }
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  //function for deleting a row
  const handleRowDelete = (oldData, resolve) => {
    // axios.delete(`https://jsonplaceholder.typicode.com/users/${oldData.id}`)
    //   .then(response => {
    //     const dataDelete = [...user];
    //     const index = oldData.tableData.id;
    //     dataDelete.splice(index, 1);
    //     setUser([...dataDelete]);
    //     resolve()
    //   })
    //   .catch(error => {
    //     setErrorMessages(["Delete failed! Server error"])
    //     setIserror(true)
    //     resolve()
    //   })
    try {
      dispatch(deleteLaptop(oldData.id));
      const dataDelete = [...user];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setUser([...dataDelete]);
      resolve()
    } catch (error) {
      setErrorMessages(["Delete failed! Server error"])
      setIserror(true)
      resolve()
    }
    
  }

  //function for adding a new row to the table
  const handleRowAdd = (newData, resolve) => {
    //validating the data inputs
    let errorList = []
    if (newData.brand === "") {
      errorList.push("Try Again, You didn't enter the brand field")
    }
    if (newData.series === "") {
      errorList.push("Try Again, You didn't enter the Username field")
    }
    if (newData.processor_type === "") {
      errorList.push("Oops!!! Please enter a valid processor_type")
    }
    if (newData.processor_generation === "") {
      errorList.push("Try Again, Phone number field can't be blank")
    }
    if (newData.ram_type === "") {
      errorList.push("Try Again, Enter ram_type url before submitting")
    }
    if (newData.ram_size === "") {
      errorList.push("Try Again, Enter RAM size before submitting")
    }
    if (newData.storage_type === "") {
      errorList.push("Try Again, Enter storage type before submitting")
    }
    if (newData.storage_size === "") {
      errorList.push("Try Again, Enter storage type before submitting")
    }

    if (errorList.length < 1) {
      // axios.post(`https://jsonplaceholder.typicode.com/users`, newData)
      //   .then(response => {
      //     let newUserdata = [...user];
      //     newUserdata.push(newData);
      //     setUser(newUserdata);
      //     resolve()
      //     setErrorMessages([])
      //     setIserror(false)
      //   })
      //   .catch(error => {
      //     setErrorMessages(["Cannot add data. Server error!"])
      //     setIserror(true)
      //     resolve()
      //   })
      try {
        dispatch(createLaptop(newData));
        let newUserdata = [...user];
        newUserdata.push(newData);
        setUser(newUserdata);
        resolve()
        setErrorMessages([])
        setIserror(false)
      } catch (error) {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      } 
    } else {
      setErrorMessages(errorList)
      setIserror(true)
      resolve()
    }
  }

  return (
    <div className="app">
      <MaterialTable
        title="Laptop & PC Asset List"
        data={user}
        columns={columns}
        options={{
          headerStyle: { borderBottomColor: '#1565c0', borderBottomWidth: '3px', fontSize:12, fontFamily: 'roboto', textAlign: 'center', },
          actionsColumnIndex: -1,
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              handleRowUpdate(newData, oldData, resolve);
            }),
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              handleRowAdd(newData, resolve)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}
      />

      <div>
        {iserror &&
          <Alert severity="error">
            <AlertTitle>ERROR</AlertTitle>
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>
            })}
          </Alert>
        }
      </div>

    </div>
  );
}

export default LaptopPCTable;