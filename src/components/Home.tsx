import * as React from "react";
import { useState } from "react";
import styled from 'styled-components';

const ExtDiv = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    vertical-align: middle;
    height: 100vh;
    background-color: grey;
`;

const Title = styled.h1 `
    position: absolute;
    font-size: 3rem;
    font-family: 'Alfa Slab One', cursive;
    letter-spacing: 0.2rem;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
    color: darkred;
    text-align: center;
    top: 23vh;

    @media only screen and (max-width: 400px) {
        font-size: 2.2rem;
        top: 10;
    }

    &.hovered {
        font-size: 3.2rem;
        top: 22vh;
    }

    &.clicked {
        font-size: 3.5rem;
        top: 18vh;

        @media only screen and (max-width: 600px) {
            font-size: 3rem;
        }

        @media only screen and (max-width: 400px) {
            font-size: 2.2rem;
            top: 10;
        }
    }
`;

const Shield = styled.img`
    position: absolute;
    height: 20vh;
    min-height: 200px;
    z-index: 1;
    
    &.hovered {
        height: 25vh;
        min-height: 220px;
    }

    &.clicked {
        min-height: 300px;
        height: 50vh;
    }
`;

const Sword = styled.img`
    position: absolute;
    height: 30vh;
    min-height: 50px;
    transform: rotate(180deg);
    top: 31vh;
    z-index: 0;

    &.hovered {
        height: 35vh;
        min-height: 225px;
        top: 28vh;
    }

    &.clicked {
        height: 250px;
        min-height: 100px;
        z-index: 2;
        transform: rotate(-90deg);
        right: 30vw;

        @media only screen and (max-width: 1300px) {
            display: none;
        }

        &.username {
            top: 36vh;
        }

        &.password {
            top: 44vh;
        }
    }
`;

const FormDiv = styled.div`
    row-gap: 1.5vh;
    height: fit-content;
    width: fit-content;
    z-index: 3;
    font-family: 'Bebas Neue', cursive;
    text-align: center;

    & > label {
        font-size: 3rem;
        color: darkred;
        text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
    }

    & > div {
        display: grid;
    }

    & > div > div {
        display: flex;
        justify-content: center;
    }

    & > div > label {
        font-size: 1.3rem;
        color: darkblue;
        text-shadow: 1px 0 0 lightgray, -1px 0 0 lightgray, 0 1px 0 lightgray, 0 -1px 0 lightgray, 1px 1px lightgray, -1px -1px 0 lightgray, 1px -1px 0 lightgray, -1px 1px 0 lightgray;
        font-weight: bold;
    }

    & > div > div > input {
        font-size: 1.3rem;
        padding: 5px 10px;
        width: 20vh;
    }

    & > .button {
        display: flex;
        justify-content: center;
    }

    & > .button > p {
        font-size: 1.8rem;
        color: darkgrey;
        width: fit-content;
        height: fit-content;
        padding: 0 10px;
        border-bottom: 2px solid darkgrey;
        text-shadow: 1px 0 0 black, -1px 0 0 black, 0 1px 0 black, 0 -1px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
        cursor: pointer;
        -webkit-user-select: none;  
        -moz-user-select: none;    
        -ms-user-select: none;      
        user-select: none;
        background-color: transparent;

        &:hover {
            color: lightgray;
            border-color: white;
        }

        &:active {
            color: white;
        }
    }
`;

const Home: React.FC = () => {
    const [isHovered   , setIsHovered]    = useState(false);
    const [isClicked   , setIsClicked]    = useState(false);
    const [formSelected, setFormSelected] = useState<"username" | "password">("username");
    const [username    , setUsername]     = useState("");
    const [password    , setPassword]     = useState("");

    return(
        <ExtDiv>
            <Title className={isHovered ? 'hovered' : isClicked ? 'clicked' : ''} >
                Dreams Archive
            </Title>
            <Shield src={isClicked ? "shield-back.png" : "shield-front.png"}
                className={isHovered ? 'hovered' : isClicked ? 'clicked' : ''}
                onMouseEnter={() => setIsHovered(isClicked ? false : true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {setIsHovered(false);setIsClicked(!isClicked);}} />
            <Sword src="sword-colored.png"
                className={
                    isHovered ? ('hovered')
                    : (isClicked ? 
                        (formSelected === "username" ? 'clicked username'
                         : 'clicked password') 
                        : '')}
                onMouseEnter={() => setIsHovered(isClicked ? false : true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {setIsHovered(false);setIsClicked(!isClicked);}} />
            <FormDiv style={{display: isClicked ? 'grid' : 'none'}}>
                <label id="title">Welcome Back</label>
                <div onMouseEnter={() => {setFormSelected("username")}}>
                    <label>Username: </label>
                    <div>
                        <input value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                </div>
                <div onMouseEnter={() => {setFormSelected("password")}}>
                    <label>Password: </label>
                    <div>
                        <input type="password"
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="button">
                    <p>Login</p>
                </div>
            </FormDiv>
        </ExtDiv>
    );
}

export default Home;