import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

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
    return(
        <div style={{height: 400, width: '100%'}}>
            <h1>List of Soccer Players</h1>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};