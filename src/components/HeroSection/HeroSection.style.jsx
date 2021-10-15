import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
    height: 800px;
    background-color: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;

    // 배경을 좀 더 어둡게 
    ::before {
        content: "";
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background: linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    width: 100%; 
    height: 100%;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
`;  

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    -o-object-fit: cover;
    background-color: #232a34;
`;

export const HeroContext = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    position: absolute;
    z-index:3;
    max-width: 1200px;
    padding: 8px 24px;
    color: #fff;    
    text-align: center;
`;

export const HeroH1 = styled.h1`
    font-size: 48px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    font-size: 24px;
    max-width: 600px;

    
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`