import React from 'react'
import { Autocomplete,TextField } from '@mui/material'
const SecondStep = () => {

  return (
    <>
      <div className="row mt-1">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <TextField label="Brand" fullWidth />
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <TextField label="Model" fullWidth />
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <TextField label="Website Url" fullWidth />
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <TextField label="Youtube Link" fullWidth />
        </div>

      </div>

    </>
  )
}

export default SecondStep