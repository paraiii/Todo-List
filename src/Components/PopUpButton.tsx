import { useSnackbar } from "notistack";
import styled from "styled-components";

const buttons = [
    { message: "Successfully done the operation." }
  ];

export const PopUpButton = () => {
    const { enqueueSnackbar } = useSnackbar();
    const popUp = (button: any) => () => {
      enqueueSnackbar(button.message);
    };
    
    return (
        <div>
            {buttons.map((button) => (
            <PopButton onClick={popUp(button)}>
                <button>success</button>
            </PopButton>
            ))}
        </div>
    );
};
const PopButton = styled.th`
`
