import React, { useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import init from "../../init";

const gridStyle = { minHeight: 550 }

const columns = [
  { name: 'tablename', header: 'tablename', defaultFlex: 1 },
  { name: 'fieldname', header: 'fieldname', defaultFlex: 1 },
  { name: 'fielddesc', header: 'fielddesc', defaultFlex: 1 },
  { name: 'sorting', header: 'sorting', defaultFlex: 1 },
  { name: 'fieldtype', header: 'fieldtype', defaultFlex: 1 },
  { name: 'orderno', header: 'orderno', defaultFlex: 1 },
]

const loadData = () => {
  return fetch('/' + init.appName + '/rest/'  + 'afxtablefields/selectAll',{
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }).then(response => {
    return response.json().then(data => {
      console.log(data);
      return data;
    })
  })
}

const Afxtablefields = () => {
  const dataSource = useCallback(loadData, []);
  return (
      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        pagination
        defaultLimit={15}
        defaultSkip={15}
        dataSource={dataSource}
        />
  )
}

export default Afxtablefields;