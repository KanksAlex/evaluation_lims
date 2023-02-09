import * as React from 'react';
import "./matrix.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import Autocomplete from '@mui/material/Autocomplete';

export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

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



  return (
    <div style={{ height: 700, width: '100%' }}>

      <div className="featured">
        <div className="featuredItem">
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
          {/* 
          <Box sx={{ m: 1, width: '25ch' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sex</InputLabel>
              <Select
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
            sx={{ m: 1, width: '25ch' }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />


        </div>
      </div>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
