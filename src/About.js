import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.png";
import Common from "./Common";
const About = ()=>{

    return (
        <>
       <Common name="Welcome to About page" visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;