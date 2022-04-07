import styled from 'styled-components';

function Grid(props){
    const { is_flex, width, height, marginTop, children, bg} = props;
    const styles = {
        is_flex : is_flex,
        width : width,
        height : height,
        marginTop : marginTop,
        bg : bg,
    }
    return(
        <>
            <GridBox {...styles}>{children}</GridBox>
        </>
    )
};
    Grid.defaultProps = {
        is_flex : false,
        width : '100%',
        height : '100%',
        bg : false,
    };

    const GridBox = styled.div`
        width: ${(props)=> props.width};
        height: ${(props)=> props.height};
        ${(props) => (props.marginTop ? `margin-top:${props.marginTop}`:'')}
        ${(props) => (props.bg ? `background-color:${props.bg}`:'')}
    `

export default Grid