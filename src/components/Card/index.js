import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Table, Badge } from "react-bootstrap/";
import Image from 'react-bootstrap/Image'
import summary from "../../summary"
import init from "../../init"

const CardBox = () => {
  const url = "/" + init.domainName + "/" + init.sqlName;
  const er = init.name + ".png";
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {init.name} Application Generation Overview
          </Accordion.Header>
          <Accordion.Body>
            The {init.name} application is auto-generated from the {init.appName}
            <Link to={url}> database schema</Link>
            <hr/>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Source Type</th>
                  <th># of Files</th>
                  <th># of Lines</th>
                </tr>
              </thead>
              <tbody>

                {summary.map((item,index) => (
                  <tr>
                    <td key={index + item.source}>{item.source}</td>
                    <td key={index + item.file_count}><Badge bg="success" key='1'>{item.file_count}</Badge> </td>
                    <td key={index + item.line_count}><Badge bg="success" key='2'>{item.line_count}</Badge></td>
                  </tr>
                ))}


              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {init.name} Entity Relationship Diagram
          </Accordion.Header>
          <Accordion.Body>
            <img src={er} />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </React.Fragment>
  );
};

export default CardBox;
