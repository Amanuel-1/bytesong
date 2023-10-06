import React from 'react'
import {css} from '@emotion/css'

const Footer = () => {
  return (
    <div className={css({
        width:"98%",
        position:"fixed",
        bottom:'0',
        padding:'1%',
        display:'flex',
        backgroundColor:'rgb(241, 184, 211)',
        justifyContent:'center',
        overflow:'hidden'

    })
    }>
       
        <small className={css({
            
            font:'4px'
        })}>made with ❤ by <a href="https://github.com/Amanuel-1">Me</a></small>

    </div>
  )
}

export default Footer