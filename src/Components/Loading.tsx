import CircularProgress from "@material-ui/core/CircularProgress";
import styled from 'styled-components';


export const Loading : React.FC= () => {
    return (
        <>
            <Header>
                <p>Loading ....</p>
                <CircularProgress />
            </Header>
        </>
    )
}
const Header = styled.div`
    font-family: sans-serif;
    text-align: center;
`
