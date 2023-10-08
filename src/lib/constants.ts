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