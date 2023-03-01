import React, { useState } from 'react';
import { Editor, AddNav,ImageUpload ,FirstStep,SecondStep} from '../components';
import { TextField ,Autocomplete} from '@mui/material';
function EditPost() {
  const [value, setValue] = useState(0);
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

  console.log(value);
  return (
    <div className='container-fluid  pt-3   panel'>

      <div className='row mt-3' style={{
        justifyContent: "center"
      }}>
         <div className='col-sm-12 col-md-12 col-lg-9 '
          style={{
            fontSize:"1.6rem",
            fontWeight:"bold",
            color:"#511",
            
          }}
         >
         <div className="card">
            <div className="card-body">

              Create New Blog
            </div>
         </div>
       
    
        
         </div>
        <div className='col-sm-12 col-md-12 col-lg-9 mt-2'>
          <div className="card" >
            <div className="card-title">
              <AddNav value={value} setValue={setValue} />
            </div>
            <div className="card-body overflow-auto">
              {value === 0 && (<FirstStep/>)}
              {value === 1 && ( <SecondStep/>)}
              {value === 2 && (<ImageUpload />)}

              <div className='p-3'  
              style={{
                justifyContent: "flex-end",
                display: "flex", flexDirection: "row"}}
                >
                <button className='btn btn-secondary'>
                   Update
                </button>

              </div>

            </div>

          </div>

        </div>
    
      </div>

    
    </div>












  );
}

export default EditPost