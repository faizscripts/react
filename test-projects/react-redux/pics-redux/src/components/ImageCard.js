import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {setSpans} from "../actions";

const ImageCard = ({image, setSpans, spans}) => {

    const imageRef = useRef()

    useEffect(() => {
        imageRef.current.addEventListener("load", calculateSpans)
    }, [])

    const {urls, description, id } = image

    const calculateSpans = () => {
        const height = imageRef.current.clientHeight

        const calculatedSpan = Math.ceil(height / 10)

        setSpans({calculatedSpan, id})
    }

    const reduxSpan = () => {
        const span = spans.find( span => span.id === id)

        if (span) {
            return `span ${span.calculatedSpan}`
        } else {
            return ""
        }
    }

    return (
        <div style={{gridRowEnd: reduxSpan()}}>
            <img ref={imageRef} alt={description} src={urls.regular} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {spans: state.spans}
}

export default connect(mapStateToProps, {setSpans})(ImageCard)