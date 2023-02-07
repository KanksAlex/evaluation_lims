import * as React from 'react';
import "./matrix.css";
import Box from '@mui/material/Box';
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

  return (
    <div style={{ height: 700, width: '100%' }}>

      <div className="featured">
        <div className="featuredItem">

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
            label="Age"
            sx={{ m: 1, width: '25ch' }}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Autocomplete
            disablePortal
            id="outlined-start-adornment"
            options={top100Films}
            sx={{ m: 1, width: '25ch' }}
            renderInput={(params) => <TextField {...params} label="facility" />}
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
