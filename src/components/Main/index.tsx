import Box from "../Box";
import * as S from "./styles"

interface BoxComponentProps {
    text: string;
    text2: string;
    img:string;
    img2:string;

}
const Main: React.FC<BoxComponentProps> = ({
    text,
    text2,
    img,
    img2,
    ...rest
}) => {return (
        <>
            <S.ContainerCenter>
                <Box text={text} local={img}/>
                <Box text={text2} local={img2}/>
            </S.ContainerCenter>
        </>
    );
};
export default Main;