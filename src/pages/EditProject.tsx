import {FC, useEffect, useState} from "react";
import {IProject} from "../interfaces/interfaces";


export const EditProject:FC = () => {
    const [current, setCurrent] = useState<IProject>()

    return (
        <>
            <h1>Hello</h1>
            <h1>{current?.name}</h1>
        </>
    )
}