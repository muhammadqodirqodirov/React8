import { createTheme } from '@mui/material/styles';
import { COLOR } from './colors';
export const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:336,
            md:728,
            lg:1248,
        }
    },
    typography:{
        fontFamily:['Geometria'].join(""),
    },
    palette:{
        primary:{
            main:COLOR.primary,
            contrastText:COLOR.white,
        },
        secondary:{
            main:COLOR.secondary,
        }
    },
    components:{
        MuiButton:{
            variants:[{
                props:{variant:"contained"},
                style:{
                    fontSize:"13px",
                    fontWeight:700,
                    textTransform:"uppercase",
                    padding:"11px 39px"
                }
            },{
                props:{variant:"outlined"},
                style:{
                    borderRadius:"5px",
                    border:`2px solid ${COLOR.secondary}`,
                    color:COLOR.secondary,
                    padding:"11px 42px",
                    fontSize:"13px",
                    fontWeight:700,
                    textTransform:"uppercase",
                    "&:hover":{
                        border:`2px solid ${COLOR.secondary}`
                    }
                }
            }
            ]
        }
    }
})
