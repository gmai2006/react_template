import React, { useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import init from "../../init";

const gridStyle = { minHeight: 550 }

const columns = [
  { name: 'kodfylo', header: 'kodfylo', defaultFlex: 1 },
  { name: 'kodepidom', header: 'kodepidom', defaultFlex: 1 },
  { name: 'kodxrisi', header: 'kodxrisi', defaultFlex: 1 },
  { name: 'expr', header: 'expr', defaultFlex: 1 },
  { name: 'aa', header: 'aa', defaultFlex: 1 },
  { name: 'notes', header: 'notes', defaultFlex: 1 },
]

const loadData = () => {
  return fetch('/' + init.appName + '/rest/'  + 'misthfyloepidom/selectAll',{
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

const MisthFyloEpidom = () => {
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

export default MisthFyloEpidom;