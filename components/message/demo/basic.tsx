import * as React from 'react';
import message from "../";
import "../style";
import Button from "../../button";
import "../../button/style";
export default ()=>{
    const openMessage=()=>{
        message.info()
    }
    return <Button type={"primary"} onClick={openMessage}> Display normal message</Button>
}