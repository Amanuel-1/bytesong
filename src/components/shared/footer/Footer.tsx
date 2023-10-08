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
        backgroundColor:'rgba(54, 44, 33,1)',
        justifyContent:'center',
        overflow:'hidden',
        color:'whitesmoke'

    })
    }>
       
        <small className={css({
            
            font:'4px'
        })}>made with ❤ by <a className={css({
          color:'rgba(250,200,100,1)',
          fontFamily:'Pacifico',
          textDecoration:'none'

        })} href="https://github.com/Amanuel-1">Me</a></small>

    </div>
  )
}

export default Footer