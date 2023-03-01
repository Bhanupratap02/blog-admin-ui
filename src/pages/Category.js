import React from 'react'
import { Add } from '@mui/icons-material';
import { BlogTable } from '../components';
import FormModal from '../components/cards/Modal';


const Category = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const handleOpen = () => setOpen(true);
    const showCategoryForm = () => {
        setName("Add Category")
        handleOpen()
    }
    const showSubCategoryForm = () => {
        setName("Add SubCategory")
        handleOpen()

    }
    return (
        <div className='container-fluid mx-2 pt-2  panel' style={{
            position: "relative"
        }} >
            <FormModal open={open} setOpen={setOpen} name={name} />
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className='row mt-4 pt-3' style={{ gap: "3rem", justifyContent: "flex-start", alignItems: "center", background: "#fff", borderRadius: "0.7em !important", marginLeft: "0.2rem", marginRight: "0.7rem" }}>
                        <div className="col-md-5 col-lg-5 col-sm-12" style={{ background: "#fff" }}>
                            <div style={{ background: " #ffffff", color: "#525", position: "relative", padding: "5px 15px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem" }}>
                                <span style={{ fontWeight: "bolder", fontSize: "1.7rem" }}>Categories</span>
                                <button type="button" class="btn " style={{ borderColor: "#511", display: "flex", gap: "10px", color: "#511", alignItems: "center", justifyContent: "space-between" }} onClick={showCategoryForm} >
                                    <Add />
                                    Add Category</button>
                            </div>
                            <BlogTable />
                        </div>
                        <div className="col-md-5 col-lg-5 col-sm-12" style={{ background: "#fff" }} >
                            <div style={{ background: " #ffffff", color: "#525", position: "relative", padding: "5px 15px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.9rem" }}>
                                <span style={{ fontWeight: "bolder", fontSize: "1.7rem" }}>Subcategories</span>
                                <button type="button" class="btn " style={{ borderColor: "#511", display: "flex", gap: "10px", color: "#511", alignItems: "center", justifyContent: "space-between" }} onClick={showSubCategoryForm}>
                                    <Add />
                                    Add Subcategory</button>
                            </div>
                            <BlogTable />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default Category