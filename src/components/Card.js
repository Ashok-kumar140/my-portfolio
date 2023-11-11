import React from 'react'

const Card = ({ title, description,imgLink,demoLink }) => {
    return (
        <div className='card'>
            <div >
                <img src={imgLink} alt="" />
            </div>
            <div >

                <h3 >{title}</h3>
                <p >{description}</p>
                <div >
                    <a href={demoLink} >GitHub</a>
                    <a href={demoLink} target='_blank' rel="noreferrer">Live demo</a>
                </div>
            </div>

        </div>
    )
}

export default Card
