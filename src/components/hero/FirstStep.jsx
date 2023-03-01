import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import Editor from '../cards/Editor'
const FirstStep = () => {
    const data = [
        "Tech",
        "Political",
        "World Affair",
        "Entertainment",
        "Social",
        "Enviroment",
        "Name",
        "Name",
        "Name",
    ]
  return (
      <div className='p-3'>
          <div className="row ">
              <div className='col-lg-12 col-md-12'>
                  <TextField id="filled-basic" label="Blog Title" variant='filled' required fullWidth

                  />
              </div>
          </div>
          <div className="row mt-4" style={{

              gap: "10px",
              justifyContent: "space-between"
          }}>
              <div className="col-sm-12 col-md-6 col-lg-6">
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={data}

                      renderInput={(params) => <TextField {...params} required label="Choose Category" />}
                  />
              </div>
              <div className="col-sm-12 col-md-5 col-lg-5 ">
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={data}
                      renderInput={(params) => <TextField {...params} required label="Choose SubCategory" />}
                  />
              </div>
          </div>
          <div className="row pt-3">
              <Editor height={"15rem"} />
          </div>
      </div>
  )
}

export default FirstStep