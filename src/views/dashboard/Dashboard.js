import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Badge } from 'react-bootstrap';
import summary from '../../summary';
import init from '../../init';

import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react';

const url = '/' + init.domainName + '/' + init.sqlName;
const er = init.name + '.png';
const fullPath = '/' + er;
console.log(fullPath);

const divStyle = {
  width: '55vw',
  height: 'auto',
};

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer');
};

const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{init.name} Application Generation Overview</strong>
            </CCardHeader>
            <CCardBody>
              <CAccordion activeItemKey={1}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>{init.name} Database schema</CAccordionHeader>
                  <CAccordionBody>
                    The {init.name} application is auto-generated from the {init.appName}
                    <Link to={url}> database schema</Link>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Statistics of the generated source code</CAccordionHeader>
                  <CAccordionBody>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Source Type</th>
                          <th># of Files</th>
                          <th># of Lines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {summary.map((item, index) => (
                          <tr key={index + item.source}>
                            <td key={index + item.source}>{item.source}</td>
                            <td key={index + item.file_count}>
                              <Badge bg="success" key="1">
                                {item.file_count}
                              </Badge>{' '}
                            </td>
                            <td key={index + item.line_count}>
                              <Badge bg="success" key="2">
                                {item.line_count}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>{init.name} Entity Relationship Diagram</CAccordionHeader>
                  <CAccordionBody>
                    <img src={er} style={divStyle} onClick={() => openInNewTab({ fullPath })}></img>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
