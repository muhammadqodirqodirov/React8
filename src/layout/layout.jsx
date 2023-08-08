import { Header } from "./header/header";
import React,{Children} from "react";

export const Layout=({childern})=>{
    return(
        <>
            <header>
                <Header/>
            </header>
            <main>
                {childern}
            </main>
            <footer></footer>
        </>
    )
}