import React from 'react';
import { Col, Row, InputGroup, Input, Form, Button, FormGroup, Label } from 'reactstrap';
import axios from 'axios';

const Feet = props => (
    <div className="container">
        <Row>
            <Col style={{ textAlign: 'left' }} md="4" sm="12">
                <h3><u>iKeepTrack</u></h3>
                <p></p>
            </Col>
            
            <Col style={{ textAlign: 'right' }} md="4" sm="12">
                <h3><u>About Me</u></h3>
            </Col>
        </Row>
    </div>
)

export default Footer;