import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { COLOR } from "../../config/colors";

export const  HeaderTopWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;  
`;

export const Navbar = styled.div`
    display: flex;

    span{
        margin:0 16px;
        height:11px;
        display: inline-block;
        width:1px;
        background-color:${COLOR.grey[700]};
        &:last-child{
            display: none;
        }
    }
`;

export const NavLink=styled(Link)`
    color:${COLOR.grey[600]};
    font-size:12px;
    text-decoration:none;
    font-weight:500;
    text-transform: uppercase;
`
export const TelLink=styled(Link)`
  color: #000;
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`