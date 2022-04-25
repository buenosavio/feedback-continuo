import styled from 'styled-components'

export const ContainerFull = styled.div`
  position: relative;
  background-color: #252422;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageFull = styled.img`
  height: 80vh;
  width: 80vw;
`;

export const TextAbs = styled.p`
  position: absolute;
  color: #FFB600;
  font-weight: bold;
  font-size: 20px;
  top: 5vh;
  left: 12vw;
`;

export const ButtonAbsolute = styled.button`
  position: absolute;
  top: 74vh;
  right: 40vw;
  width: 20vw;
  height: 4vh;
  border: 2px solid #FFB600;
  border-radius: 20px;
  background-color: #252422;
  color: white;
  transition: 1s;
  :hover {
    background-color: #FFB600;
  }
`;