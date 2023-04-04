import  React ,{useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
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

export default function UserTable({ users, token, setUsers, deleteUser }) {
    const [selectedRows, setselectedRows] = useState([])
    const columns = [
        { field: 'name', headerName: 'Name', width: 110 },
        { field: 'email', headerName: 'Email', width: 210 },
        { field: 'gender', headerName: 'Gender', width: 90 },
        { field: 'isEmailVerified', headerName: 'EmailVarified', width: 90 },
        { field: 'phoneNumber', headerName: 'PhoneNumber', width: 130 },
     
    ];
    const onRowsSelectionHandler = (ids) => {
        const selectedRowsData = ids.map((id) => users.find((row) => row._id === id));
        setselectedRows(selectedRowsData)
    };
    const deleteHandler = () => {
        selectedRows.forEach((item) => {
            console.log("itemToDelete", item._id);
            setUsers(users.filter(row => row._id !== item._id))
            deleteUser(item._id, token)
        })
    }
    return (
        <div style={{ height: 400, width: '100%', background: "#ffffff" }}>
            {
                selectedRows.length > 0 && (<div style={{
                    display: "flex",
                    justifyContent: 'flex-end',
                }}>
                    <Tooltip title="Delete" onClick={() => deleteHandler()}>
                        <IconButton size='lg'>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </div>)

            }
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                getRowId={(r) => r._id}
                disableRowSelectionOnClick
                onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            />
        </div>
    );
}