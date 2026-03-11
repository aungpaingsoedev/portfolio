import React from 'react'
import { useParams } from 'react-router-dom'
import DetailSection from "../../components/Blog/DetailSection"

const detail = () => {
    const { id } = useParams();
    return (
        <DetailSection blogId={id} />
    )
}

export default detail