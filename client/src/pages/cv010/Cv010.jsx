import * as React from 'react';
import "./matrix.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';

export default function DataGridProDemo() {
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {eaderName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// datagrid ends here

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },

  ];

  const results = [
    { label: 'Positive' },
    { label: 'Negative' }
  ];


  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleSubmit = async (values, { resetForm }) => {}



  return (
    <div style={{ height: 700, width: '100%' }}>

      <div className="featured">
        
        <div className="featuredItem">
          <form>
          <div style={{marginBottom:20,}}>
            <TextField
              label="PID"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">CV010</InputAdornment>,
              }}
            />

            <TextField
              id="outlined-number outlined-start-adornment"
              label=" PCR result (Ct value ORF 1a/b gene)2"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-number outlined-start-adornment"
              label="  PCR result (E-GENE)2"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="outlined-number outlined-start-adornment"
              label=" PCR result (internal CTRL)"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div style={{marginBottom:20,}} className="item2">
            <Autocomplete
              disablePortal
              id="outlined-number outlined-start-adornment"
              options={top100Films}
              sx={{ m: 1, width: '25ch' }}
              renderInput={(params) => <TextField {...params} label="facility" />}
            />

            <Autocomplete
              disablePortal
              id="outlined-number outlined-start-adornment"
              options={results}
              sx={{ m: 1, width: '25ch' }}
              renderInput={(params) => <TextField {...params} label="PCR result (Pos/Neg)" />}
            />
        
            <Autocomplete
              disablePortal
              id="outlined-number outlined-start-adornment"
              options={results}
              sx={{ m: 1, width: '25ch' }}
              renderInput={(params) => <TextField {...params} label="POC result (Pos/Neg)" />}
            />

            <TextField
              id="outlined-number outlined-start-adornment"
              label="POC result (Ct Value)"
              sx={{ m: 2, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <button
            // onClick={() => {
            //     console.log(values)
            //     console.log(errors)
            // }}
            type="submit"
            className="">
          </button>
          </form>
          

        </div>
          {/* 
          <Box sx={{ m: 1, width: '25ch' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sex</InputLabel>
              // <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Sex"
                onChange={handleChange}
              >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
        
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}
