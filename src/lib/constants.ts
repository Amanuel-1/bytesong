import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const StyledImg = styled.img`

object-fit: cover;
background-color: rgb(30, 30, 30);
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;

`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f9f9f9;
  min-width: 120px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 8px 12px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Btn  = styled.button({
  marginTop:"10px",
  marginBottom:"10px",
  marginLeft:"50px",
  marginRight:"50px",
  maxWidth:"12rem",
  minWidth:"7rem",
  minHeight:"3rem",
  maxHeight:"4rem",
  paddingLeft:".4rem",
  paddingRight:".4rem",

  backgroundColor:"rgba(30,30,30,.8)",
  fontWeight:"bolder",
  borderRadius:"8px",
  color:"rgb(200,200,200)",
  borderWidth:"0px",
  transition:"background-color 0.3s ease",
  ":hover":{
    cursor:"pointer",
    backgroundColor:"rgba(60,60,60,.8)"
  }
  
})

export const formContainerStyles = css`
display: flex;
justify-content: center;
align-items: start;
min-height: 100vh;

`;

export const formStyles = css`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: rgba(50,30,30,.1);
width: 400px;
`;

export const labelStyles = css`
margin-bottom: 8px;
text-align: left;
width: 100%;
`;

export const inputStyles = css`
padding: 8px;
margin-bottom: 16px;
width: 100%;
border-radius: 4px;
border: 1px solid #ccc;
&:focus{
  border:none;
}
`;

export const textareaStyles = css`
${inputStyles};
resize: vertical;
`;

export const buttonStyles = css`
padding: 8px 16px;
border-radius: 4px;
border: none;
background-color: #007bff;
color: #fff;
cursor: pointer;
`;


export const SongContainer = styled.div({
  position:'relative',
  width:'100vw',
  height:'100vh',
  display:"flex",
  textAlign:"center",
  flexDirection:"column",
  justifyContent:'center',
  alignContent:'center'


})

export const Loading = styled.div({
  backgroundColor:'rgba(20,30,20.1)',
  width:'100vw',
  height:'100vh',
  position:"absolute",
  display:"flex",
  flexDirection:"column",
  gap:'4rem',
  justifyContent:"center",
  alignContent:"center",
  verticalAlign:"middle",
  fontSize:'40px',
  fontWeight:'900'

})
export const StatusBar = styled.div({

  width:'100vw',
  height:'1.5rem',
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignContent:"center",
  verticalAlign:"middle",
  fontSize:'15px',
  fontWeight:'400'

})