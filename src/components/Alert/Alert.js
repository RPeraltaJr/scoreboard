import React from 'react'
import PropTypes from 'prop-types'
import './Alert.scss'

export default function Alert({ alert }) {
    return (
        alert !== null && (
            <div className="alert">
                <p>{ alert }</p>
            </div>
        )
    )
}

Alert.propTypes = {
    alert: PropTypes.string,
}