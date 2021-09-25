import {FC, useState} from "react";
import {useParams} from "react-router-dom"


export const EditProject:FC = () => {
    const {name} = useParams() as any

    return (
        <>
            <h1>Edit Project: {name}</h1>


        </>
    )
}