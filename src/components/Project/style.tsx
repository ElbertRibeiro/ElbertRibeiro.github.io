import styled from 'styled-components';

export const Container = styled.div`
    width: 1283px;
    height: 645px;
    left: 78px;
    top: 1005px;
    margin: 0 auto;

    a {
        @media (max-width: 960px) {
        width: 350px;
        float: left;
        flex-direction: column;
        max-width: 960px;
        }
    }

    @media (max-width: 960px) {
        width: 350px;
        margin-top: -160px;
    }
`;

export const ImgProject = styled.img`
    width: 405px;
    height: 301px;

    margin: 5px;
    background: #363636;
    border-radius: 20px;   
    
    @media (max-width: 960px) {
        height: 250px;
        width: 100%;
        float: left;
        margin: 0 auto;
        flex-direction: column;
        max-width: 960px;
    }
`;