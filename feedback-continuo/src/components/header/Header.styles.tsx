import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: #858282cc;
`;

export const UserText = styled.p`
  font-size: 30px;
  margin-left: 15px;
  color: white;  
`;

export const MinorButton = styled.button`
  display: block;
  width: 20%;
  padding: 10px 0;
  margin: 20px 0 10px 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color};
  background-color: ${props => props.itemType} ;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

export const EditImage = styled.label`
  width: 80px;
  height: 80px; 
  border-radius: 50%;
  border: 2px solid white;
  background-image: url(${props => props.itemType});
  background-size: 100% 100%; 
  :hover {    
    opacity: 0.7; 
    ::before {
      display: flex;
      text-align: center;      
      font-weight: bold;           
      margin-top: 25%;
      content: "Alterar foto";            
      background-color: white;
      color: black; 
      border-radius: 10px;      
    }
  }  
  `;
