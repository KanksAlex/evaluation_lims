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
  ct_value_ORF : 0,
  e_GENE : 0,
  internal_CTRL : 0,
  facility : '',
  pcr_result : '',
  poc_resut : '',
  poc_value : 0,
}

const columns =[
  {headerName: 'Date', field: 'date'},
  {headerName: 'Facility of sample collection', field: 'facility'},
  {headerName: 'Participant ID', field: 'pid'},
  {headerName: 'PCR result(Ct value ORF 1a/b gene)2', field: 'ct_value_ORF'},
  {headerName: 'PCR result(E-GENE)2', field: 'e_GENE'},
  {headerName: 'PCR result(internal CTRL)', field: 'internal_CTRL'},
  {headerName: 'PCR result(Pos/Neg)', field: 'pcr_result'},
  {headerName: 'POR result(Pos/Neg)', field: 'poc_resut'},
  {headerName: 'POC result (Ct Value)', field: 'poc_value'},

]

  const [values, setValues] = React.useState(initalValues);
  const [data, setData] = React.useState([])
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
  const fetchData = async ()=>{
    try{
      const res = await axios.get("http://localhost:5000/CV010");
      const {data} =  res
      setData(data);
      console.log("Fetched Data: ",data)
      
    }catch(err){
      console.log(err)
    }
  }

  React.useEffect (()=>{
    
    fetchData();
  },[]);

  const handleChange = (e) => {
    const {name, value } = e.target
    setValues({
      ...values,
      [name]:value
    })
  };

  const handleSubmit = async (error) => {
   error.preventDefault();
  console.log("Values:", values);
   try{
      await axios.post("http://localhost:5000/CV010", values);
    await fetchData();

   }catch(err){
      console.log(err); 
   }
   

  }



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
              name="ct_value_ORF"
              value={values.ct_value_ORF}
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
              name="e_GENE"
              value={values.e_GENE}
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
              name="internal_CTRL"
              value={values.internal_CTRL}
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
                  <MenuItem value={"Butabika"}>Butabika</MenuItem>
                  <MenuItem value={"Mulago"}>Mulago</MenuItem>
                  <MenuItem value={"Kiruddu"}>Kiruddu</MenuItem>
                  <MenuItem value={"Kawempe"}>Kawempe</MenuItem>
                </Select>
              </FormControl>
          </Box>
                     
          <Box sx={{ m: 1, width: '25ch' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PCR result (Pos/Neg)</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="pcr_result"
                  value={values.pcr_result}
                  label="PCR result (Pos/Neg)" 
                  onChange={handleChange}
                >
                  <MenuItem value={"positive"}>Positive</MenuItem>
                  <MenuItem value={"negative"}>Negative</MenuItem>
                  <MenuItem value={"presumptive"}>Presumptive pos</MenuItem>
                </Select>
              </FormControl>
          </Box>
          <Box sx={{ m: 1, width: '25ch' }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">POC result (Pos/Neg)</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="poc_resut"
                  value={values.poc_resut}
                  label="POC result (Pos/Neg)" 
                  onChange={handleChange}
                >
                  <MenuItem value={"n/a"}>N/A</MenuItem>
                  <MenuItem value={"positive"}>Positive</MenuItem>
                  <MenuItem value={"negative"}>Negative</MenuItem>
                  <MenuItem value={"failed"}>Failed</MenuItem>
                  <MenuItem value={"inhibition"}>PCR inhibition</MenuItem>
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
              name="poc_value"
              value={values.poc_value}
              onChange={handleChange}
            />
          </div>
          <Button     
            variant="contained" 
            type="submit"
            // onClick={() => {  
            //   console.log(values)
            // }}
          >Submit</Button>   
          </form> 
        </div>
         
        
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
        
      <DataGrid
        key={data.pid}
        rows={data}
        getRowId={(data) => ({id:data.pid})}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}
