import * as React from 'react';
import axios from 'axios';
import "./matrix.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import InputAdornment from '@mui/material/InputAdornment';





export default function DataGridProDemo() {

const initalValues = {
  pid : '',
  pcr_ct : 0,
  pcr_e : 0,
  pcr_internal : 0,
  facility : '',
  pcr_pos_neg : '',
  por_pos_neg : '',
  por_ct : 0,
}
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
    { label: 'The Shawshank Redemption' },
    { label: 'The Godfather' },
    { label: 'The Godfather: Part II'},
    { label: 'The Dark Knight' },
    { label: '12 Angry Men' },
    { label: "Schindler's List"},
    { label: 'Pulp Fiction'},

  ];
  // const top100Films = [
  //   { label: 'The Shawshank Redemption', year: 1994 },
  //   { label: 'The Godfather', year: 1972 },
  //   { label: 'The Godfather: Part II', year: 1974 },
  //   { label: 'The Dark Knight', year: 2008 },
  //   { label: '12 Angry Men', year: 1957 },
  //   { label: "Schindler's List", year: 1993 },
  //   { label: 'Pulp Fiction', year: 1994 },

  // ];

  const results = [
    { label: 'Positive' },
    { label: 'Negative' }
  ];


  const [values, setValues] = React.useState(initalValues);
  // const [errors, setErrors] = React.useState({});
  // const validate = () => {
  //   let temp = {}
  //   temp.pid = values.pid?"":"This field is required."
  //   temp.pcr_ct = values.pcr_ct?"":"This field is required."
  //   temp.pcr_e= values.pcr_e?"":"This field is required."
  //   temp.pcr_internal = values.pcr_internal?"":"This field is required."
  //   temp.por_ct = values.por_pos_neg?"":"This field is required."
  //   temp.facility = values.facility.length!==0?"":"This field is required."
  //   temp.pcr_pos_neg = values.pcr_pos_neg!==0?"":"This field is required."
  //   temp.poc_ct = values.facility.length!==0?"":"This field is required."
  //   setErrors({
  //     ...temp
  //   })
  // }
  const handleChange = (e) => {
    const {name, value } = e.target
    setValues({
      ...values,
      [name]:value
    })
  };

  const handleSubmit = () => {
    // window.alert("testing")
    axios.post("http://localhost:5000/additem",{
      item: values
    })

  }
  // const handleSubmit = async (values, { resetForm }) => {

  // }



  return (
    <div style={{ height: 700, width: '100%' }}>

      <div className="featured">
        
        <div className="featuredItem" >
          <form onSubmit={handleSubmit}>
          <div style={{marginBottom:20,}}>
            <TextField
              // error
              label="PID"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">CV010</InputAdornment>,
              }}
              // helperText="Enter text"
              name="pid"
              value={values.pid}
              onChange={handleChange}
            />

            <TextField
              // error
              id="outlined-number outlined-start-adornment"
              label=" PCR result (Ct value ORF 1a/b gene)2"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Enter Number"
              name="pcr_ct"
              value={values.pcr_ct}
              onChange={handleChange}
            />

            <TextField
              // error
              id="outlined-number outlined-start-adornment"
              label="  PCR result (E-GENE)2"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Enter Number"
              name="pcr_e"
              value={values.pcr_e}
              onChange={handleChange}
            />

            <TextField
              // error
              id="outlined-number outlined-start-adornment"
              label=" PCR result (internal CTRL)"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Enter number"
              name="pcr_internal"
              value={values.pcr_internal}
              onChange={handleChange}
            />
          </div>
          <div style={{marginBottom:20,}} className="item2">

          <Box sx={{ m: 1, width: '25ch' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Facility</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="facility"
                  value={values.facility}
                  label="Facility"
                  onChange={handleChange}
                >
                  <MenuItem value={"health"}>Health</MenuItem>
                  <MenuItem value={"IT"}>IT</MenuItem>
                  <MenuItem value={"Equipment"}>Equipment</MenuItem>
                </Select>
              </FormControl>
          </Box>
                     
          <Box sx={{ m: 1, width: '25ch' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PCR result (Pos/Neg)</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="pcr_pos_neg"
                  value={values.pcr_pos_neg}
                  label="PCR result (Pos/Neg)" 
                  onChange={handleChange}
                >
                  <MenuItem value={"positive"}>Positive</MenuItem>
                  <MenuItem value={"negative"}>Negative</MenuItem>
                </Select>
              </FormControl>
          </Box>
          <Box sx={{ m: 1, width: '25ch' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">POC result (Pos/Neg)</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="por_pos_neg"
                  value={values.por_pos_neg}
                  label="POC result (Pos/Neg)" 
                  onChange={handleChange}
                >
                  <MenuItem value={"positive"}>Positive</MenuItem>
                  <MenuItem value={"negative"}>Negative</MenuItem>
                </Select>
              </FormControl>
          </Box>
            
        
            

            <TextField
              // error

              id="outlined-number outlined-start-adornment"
              label="POC result (Ct Value)"
              sx={{ m: 1, width: '25ch' }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              // helperText="Enter Number"
              name="por_ct"
              value={values.por_ct}
              onChange={handleChange}
            />
          </div>
          <Button variant="contained" 
            onClick={() => {  
              console.log(values)
            }}
          >Submit</Button>   
          </form> 
        </div>
         
        
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        key={rows.id}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}
