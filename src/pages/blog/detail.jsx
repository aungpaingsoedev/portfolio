import React from 'react'
import { useParams } from 'react-router-dom'
import DetailSection from "../../components/Blog/DetailSection"

const detail = () => {
    const { slug } = useParams();
    return (
        <DetailSection blogSlug={slug} />
    )
}

export default detail