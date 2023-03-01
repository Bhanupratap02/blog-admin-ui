import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Autocomplete, TextField } from '@mui/material'
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display:'flex',
    flexDirection:"column",
    alignItem:'center',
    gap:"1rem",
    justifyContent:'center',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function FormModal({open, setOpen, name}) {
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
    const handleClose = () => setOpen(false);
  return (
      <div>

          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
          >

              <Box sx={style}>
                  <div style={{ background: " #ffffff", color: "#525", textAlign:"center", padding: "5px 15px", marginBottom: "0.9rem" }}>
                      <span style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>{name}</span>
                      </div>


                      {name === "Add Category" ? 
                      <>
                          <TextField id="outlined-basic" label="Category Name" variant="outlined" />
                      </>
                      : 
                      <>
                          <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={data}
                              renderInput={(params) => <TextField {...params} required label="Choose Category" />}
                          />
                          <TextField id="outlined-basic" label="Sub Category Name" variant="outlined" />
                      </>
                      
                      }
                
                  <Button variant="outlined">Submit</Button>
              </Box>
          </Modal>
      </div>
  )
}

export default FormModal