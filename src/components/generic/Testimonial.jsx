import "./Testimonial.scss"
import React from 'react'
import CircleAvatar from "/src/components/generic/CircleAvatar.jsx"
import {useUtils} from "/src/helpers/utils.js"
import FaIcon from "/src/components/generic/FaIcon.jsx"
import ExternalLink from "/src/components/generic/ExternalLink.jsx"

function Testimonial({quote, avatar, fallbackIcon, fallbackIconColors, author, role, href}) {
    const utils = useUtils()
    quote = utils.limitTextSize(quote, 230)

    return (
        <div className={`testimonial`}>
            <div className={`testimonial-balloon`}>
                <div className="triangle"/>
                <div className={`text-2`}>
                    <FaIcon iconName={'fa-solid fa-quote-left'} className={`fa-icon me-2`}/>
                    <span dangerouslySetInnerHTML={{
                        __html: utils.parseJsonText(quote)
                    }}/>
                    <FaIcon iconName={'fa-solid fa-quote-right'} className={`fa-icon ms-2`}/>
                </div>
            </div>

            <CircleAvatar img={avatar}
                          alt={author}
                          size={3}
                          fallbackIcon={fallbackIcon}
                          fallbackIconColors={fallbackIconColors}/>

        </div>
    )
}

export default Testimonial