/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {Card , CardBody , Row , Col , Container , Button} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from './Components/Icons';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = ()=>{
    const [isCross,setIsCross] = useState(false);
    const [winMessage,setWinMessage] = useState("");

    const reloadGame=()=>{

    }

    const checkIsWinner=()=>{

    }

    const changeItem = itemNumber =>{

    }

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    <div className="grid">
                        {
                            itemArray.map((item,index)=>{
                                return <Card>
                                    <CardBody className="box">
                                        <Icon name={item} />
                                    </CardBody>
                                </Card>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default App;