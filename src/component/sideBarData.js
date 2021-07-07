import React from 'react'
import {VscHome, VscThreeBars} from "react-icons/vsc";
import {AiOutlineHome,AiFillHeart} from "react-icons/ai";
import {Link } from 'react-router-dom'
import { FcAbout } from "react-icons/fc";
import { FaPeopleCarry } from "react-icons/fa";
export const SideBarData=[
    {
        title:"Home",
        path:'./',
        icon:<AiOutlineHome/>
    },
    {
        title:"About",
        path:'./about',
        icon:<FcAbout/>
    },
    {
        title:"Product",
        path:'./product',
        icon:<AiFillHeart/>
    },
    {
        title:"Team",
        path:'./team',
        icon:<FaPeopleCarry/>
    },
]