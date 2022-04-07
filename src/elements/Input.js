import styled from 'styled-components';

function Input(props){
    const { _onChange, bg, width, height } = props;
    const styles = {
        bg : bg,
        width : width,
        height : height,
    }
    return(
        <>
            <InputBox {...styles} onChange={_onChange}></InputBox>
        </>
    )
}

Input.defaultProps = {
    _onChange : () => {},
    bg : false,
    width : false,
    height : false,
}

const InputBox = styled.input`
    width: ${(props)=> props.width};
    height: ${(props)=> props.height};
    background-color:#eee;
    border:none;
    border-radius : 20px;
`

export default Input