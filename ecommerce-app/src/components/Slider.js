import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw)
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InforContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {

    const handleClick = (direction) => {

    };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://img.ltwebstatic.com/images3_pi/2021/07/28/1627438439c7c72ca45293298e40ba52c7a88b15c8_thumbnail_900x.webp" />
                </ImgContainer>

                <InforContainer>
                    <Title>SPRING SALE</Title>
                    <Description>DON'T COMPRAMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                    <Button>Shop Now!</Button>
                </InforContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                    <Image src="https://img.ltwebstatic.com/images3_pi/2022/01/12/164197786912118e1441c3211205f07dd16cd0848b_thumbnail_900x.webp" />
                </ImgContainer>

                <InforContainer>
                    <Title>STYLE CORNNER</Title>
                    <Description>CHECK OUT OUR Y2K STYLES</Description>
                    <Button>Shop Now!</Button>
                </InforContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider