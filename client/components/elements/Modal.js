import styled from 'styled-components';

const Modal = styled.div`
display: ${props => props.show ? 'block' : 'none'};
position: fixed;
background-color: rgba(0,0,0,0.5);
z-index: 3;
height: 100%;
width: 100%;
align-content: center;
overflow:auto;


`

export default Modal;