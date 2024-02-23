import React from "react";
import Button from "../../components/Button/Button";
import InputBox from "../../components/Input/InputBox";
import Sidebar from "../../layouts/components/Sidebar/Sidebar";
function Main() {
    const handleClick = () => {
        console.log('button clicked')
    }

    return (
        <div className="main">
            <Button onclick={handleClick} icon = "mic">
                +
            </Button>
            <InputBox>
            </InputBox>
            <Sidebar className="sidebar" icon="home" name="Môn Toán"/>
        </div>
    )
}

export default Main