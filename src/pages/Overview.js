import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import CardBox from '../components/Card';
import DatabaseSchema from '../assets/database-schema.png';
import htmlSample from '../assets/html-sample.jpg'

const Overview = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <CardBox />
                <br></br>

            </Container>
        </React.Fragment>
    )
}

export default Overview;
