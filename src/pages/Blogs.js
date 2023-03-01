import React from 'react'
import {List,ListItem, ListItemText} from "@mui/material"
import { Add } from '@mui/icons-material';
import { BlogTable } from '../components';

const Blogs = () => {
    return (
        <div className='container-fluid mt-5'>
            <div style={{ background: " #ffffff",color:"#525",position:"relative",padding:"5px 15px",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.9rem"}}>
            <span style={{ fontWeight: "bolder", fontSize: "1.7rem" }}>Blogs</span>
                <button type="button" class="btn " style={{borderColor:"#511",display:"flex",gap:"10px",color:"#511",alignItems:"center",justifyContent:"space-between"}}>
                <Add/>
                Add Blog</button> 
            </div>
            <BlogTable/>
        </div>
    );
}

export default Blogs