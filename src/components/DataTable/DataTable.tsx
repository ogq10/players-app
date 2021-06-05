import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api'
import { useGetData } from '../custom-hooks'
import { Button, Dialog, 
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import {PlayersForm} from '../PlayersForm'


interface gridData{
  data:{
    id?:string
  }
}

const columns: GridColDef[] = [
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
    field: 'position',
    headerName: 'Position',
    width: 80,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id,'firstName') || ''} ${params.getValue(params.id,'lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Beckham', firstName: 'David', age: 46, position: 'CM' },
  { id: 2, lastName: 'Ronaldo', firstName: 'Cristiano', age: 36, position: 'LW'},
  { id: 3, lastName: 'Messi', firstName: 'Lionel', age: 33, position: 'RW'},
  { id: 4, lastName: 'Ibrahimovic', firstName: 'Zlatan', age: 39 , position: 'ST'},
  { id: 5, lastName: 'Carlos', firstName: 'Roberto', age: 48, position: 'LB'},
];

export const DataTable = () => {
  let { playerData, getData} = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }
  let handleClose = () => {
    setOpen(false)
  }
  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)


  return(
        <div style={{height: 400, width: '100%'}}>
            <h1>List of Soccer Players</h1>
            <DataGrid rows={playerData} columns={columns} pageSize={10} checkboxSelection onRowSelected = { setData } />



            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              
              
              <DialogTitle id="form-dialog-title"> Update Players</DialogTitle>
              <DialogContent>
                <DialogContentText> Update Player</DialogContentText>
                <PlayersForm id={gridData.data.id!} />
              </DialogContent>
              
              <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick = {handleClose} color="primary">Done</Button>
              </DialogActions>


            </Dialog>

        </div>
    );
};