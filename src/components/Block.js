import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`;

const Button = styled.button`
pointer-events: ${props => props.block ? 'none' : 'auto'};
background: ${props => props.warn ? 'yellow' : 'green'};
color: ${props => props.warn ? 'red' : 'blue'}}
`;


function Block({reset, block}) {
    return (
        <Container>
            <Button block={block}>Button1</Button>
            <Button warn>Button2</Button>
            <Button as='input' type={reset} value='Button3'></Button>
        </Container>
    );
}

export default Block;