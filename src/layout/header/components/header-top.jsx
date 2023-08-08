import React from "react";
import { Button, Container,Stack } from "@mui/material";
import { HeaderIcon } from "../../../assets/svg/header-icon";
import { HeaderTopWrapper,Navbar,NavLink,TelLink } from "../header-style";
import { navbar } from "../data/navbar";
import { Link } from "react-router-dom";



export const HeaderTo=()=>{
    return(
        <Container>
            <HeaderTopWrapper>
                <a>
                    <HeaderIcon/>
                </a>
                <Stack maxWidth="936px" justifyContent="space-between" direction="row">
                   <Button variant="contained">
                   хочу попробовать
                    </Button> 
                </Stack>
                <Navbar>
                    {navbar.map((item)=>(
                        <React.Fragment key={item.title}>
                            <NavLink to={item.path}>{item.title}</NavLink>
                            <span/>
                        </React.Fragment>
                    ))}
                </Navbar>
                <Stack>
                    <TelLink type="tel">+7 499 444-69-02</TelLink>
                        
                </Stack>
            </HeaderTopWrapper>
        </Container>
    )
}