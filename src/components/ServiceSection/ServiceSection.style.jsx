import styled from 'styled-components';

export const ServicesSection = styled.div`
    background-color: #010606;
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px) {
        height: 1100px;
    }
    @media screen and (max-width:480px) {
        height: 1300px;
    }
`;

export const ServicesH1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 65px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;


export const ServicesWrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:16px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`;

export const ServicesCard = styled.div`
    background-color: #fff;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    height: 340px;
    width: 300px;
    border-radius: 10px;
    padding: 30px;
    color: #000;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;

    &:hover {
        transform:scale(1.02);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;


export const ServicesH2 = styled.h2` 
    font-size: 1rem;
    margin-bottom: 10px;
    
    
    `;
export const ServicesP = styled.p`
    text-align: center;
    font-size: 1rem;
`;
