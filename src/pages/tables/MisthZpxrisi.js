import React, { useCallback } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import init from "../../init";

const gridStyle = { minHeight: 550 }

const columns = [
  { name: 'kodxrisi', header: 'kodxrisi', defaultFlex: 1 },
  { name: 'descxrisi', header: 'descxrisi', defaultFlex: 1 },
  { name: 'startdate', header: 'startdate', defaultFlex: 1 },
  { name: 'enddate', header: 'enddate', defaultFlex: 1 },
  { name: 'maskposo', header: 'maskposo', defaultFlex: 1 },
  { name: 'maskposot', header: 'maskposot', defaultFlex: 1 },
  { name: 'maskdate', header: 'maskdate', defaultFlex: 1 },
  { name: 'eteria', header: 'eteria', defaultFlex: 1 },
  { name: 'eteriadesc', header: 'eteriadesc', defaultFlex: 1 },
  { name: 'address', header: 'address', defaultFlex: 1 },
  { name: 'tk', header: 'tk', defaultFlex: 1 },
  { name: 'city', header: 'city', defaultFlex: 1 },
  { name: 'phone', header: 'phone', defaultFlex: 1 },
  { name: 'fax', header: 'fax', defaultFlex: 1 },
  { name: 'maskdatee', header: 'maskdatee', defaultFlex: 1 },
  { name: 'maskposoe', header: 'maskposoe', defaultFlex: 1 },
  { name: 'maskposote', header: 'maskposote', defaultFlex: 1 },
  { name: 'afm', header: 'afm', defaultFlex: 1 },
  { name: 'doy', header: 'doy', defaultFlex: 1 },
  { name: 'round', header: 'round', defaultFlex: 1 },
  { name: 'prnLogo1', header: 'prnLogo1', defaultFlex: 1 },
  { name: 'prnLogo2', header: 'prnLogo2', defaultFlex: 1 },
  { name: 'prnLogo3', header: 'prnLogo3', defaultFlex: 1 },
  { name: 'prnLogo4', header: 'prnLogo4', defaultFlex: 1 },
  { name: 'prnLogo5', header: 'prnLogo5', defaultFlex: 1 },
  { name: 'prnSign1Prosf', header: 'prnSign1Prosf', defaultFlex: 1 },
  { name: 'prnSign1Name', header: 'prnSign1Name', defaultFlex: 1 },
  { name: 'prnSign2Prosf', header: 'prnSign2Prosf', defaultFlex: 1 },
  { name: 'prnSign2Name', header: 'prnSign2Name', defaultFlex: 1 },
  { name: 'prnSign3Prosf', header: 'prnSign3Prosf', defaultFlex: 1 },
  { name: 'prnSign3Name', header: 'prnSign3Name', defaultFlex: 1 },
  { name: 'prnNotes1', header: 'prnNotes1', defaultFlex: 1 },
  { name: 'prnNotes2', header: 'prnNotes2', defaultFlex: 1 },
  { name: 'prnNotes3', header: 'prnNotes3', defaultFlex: 1 },
]

const loadData = () => {
  return fetch('/' + init.appName + '/rest/'  + 'misthzpxrisi/selectAll',{
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

const MisthZpxrisi = () => {
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

export default MisthZpxrisi;