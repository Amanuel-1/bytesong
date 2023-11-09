import React from 'react'
import {css} from '@emotion/css'
import { useSelector } from 'react-redux'
import { StatusBar } from '../../../lib/constants'

const Footer = () => {
  let error:string= useSelector((state:any)=>state.songsList.error)
  let success:string= useSelector((state:any)=>state.songsList.success)

  
    const getStatus=()=>{
      if(error){
        return {color:'rgba(255,20,50,1)',message:error}
      }
      else if(success){
        return {color:'green',message:success}
      }
      else{
        return {}
      }
    }

    var status = getStatus()
  
    
  return (
   <div className={css({
    width:"100%",
    position:"fixed",
    bottom:'0',
    display:'flex',
    flexDirection:'column',

    backgroundColor:'rgba(54, 44, 33,1)',
    justifyContent:'center',
    overflow:'hidden',
    color:'whitesmoke'

})
}>
     {
      (status) && <StatusBar className={css({backgroundColor:status.color})}>
                    {status.message}
                    <button className={css({
                      justifySelf:'end',
                      fontSize:'10px'

                    })} onClick={()=>{
                      status ={}
                    }}>X</button>
                  </StatusBar>
    }
    <div className={css({
        width:"98%",
        
   
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
   </div>
  )
}

export default Footer