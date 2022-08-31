import React, { useEffect, useState } from "react"
import { Col } from "../../styles/styles.styled"
import { contents } from "./contents"

export const Sidebar = () => {
    const [key, setKey] = useState(null);
    const [subcontent, setSubcontent] = useState(null);

    useEffect(() => {
        if (!key) return;
        if (!contents.desktop[key].subcontent) setSubcontent(null);
        setSubcontent(contents.desktop[key].subcontent);
    }, [key, subcontent])

    return (
        <Col>
            {Object.keys(contents.desktop).map((c, key) => <span onMouseEnter={() => setKey(c)} key={key}>{contents.desktop[c].icon} {contents.desktop[c].content}</span>)}
            {subcontent && Object.keys(subcontent).map((s, key) => <span>{subcontent[s].icon} {subcontent[s].content}</span>)}
        </Col>
    )
}