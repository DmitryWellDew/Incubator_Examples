import React, {useState} from "react";
import AccordionTitle from "../AccordionTitle/AccordionTitle";
import AccordionBody from "../AccordionBody/AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed:() => void
}

function Accordion(props:AccordionPropsType) {

    return(
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} />
            {props.collapsed && <AccordionBody/>}
        </div>
    )
}

export default Accordion