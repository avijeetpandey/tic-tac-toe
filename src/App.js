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
        //reloads the game
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty",0,9);
    }

    const checkIsWinner=()=>{
        
    }

    const changeItem = itemNumber =>{
        if(winMessage)
            return toast(winMessage,{type:"success"})

        if(itemArray[itemNumber]){
            itemArray[itemNumber] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }else{
            return toast("already filled" , {type : "error"})
        }

        checkIsWinner();
    }

    return(
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-primary text-center text-uppercase">
                                {winMessage}
                            </h1>
                            <Button 
                            color="success"
                            block
                            onClick={reloadGame}
                            >Relaod Game</Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCross ? "cross" : "circle"} turns
                        </h1>
                    )} 
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