import styled from 'styled-components';

export const Head = styled.div`
    width: 917px;
    height: 560px;
    left: 258px;
    top: 219px;
    padding: 28px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 960px) {
        //align-items: initial;
        //justify-content: left;
        //right: 300%;
        width: 90%;
    }
`;

export const Description = styled.div`
    color: white;
    margin: 0 370px;
    h4 {
        transition: 0.9s ease;
        &:hover {
            transition: 0.9s;
            color: red;
            transform: translate3d(6px, -6px, 0);
        }
    }
    @media (max-width: 960px) {
        margin-left: 30%;
        align-items: center;
        width: 20px;
        h2 {
            display: none;
        }
         h4 {
            width: 200px;
            height: 30px;
        }
    }
`;

export const Headshot = styled.img`
    width: 200px;
    height: 188px;
    margin-left: 37%;
    top: 219px;
    align-items: center;
    border-radius: 100%;

    @media (max-width: 960px){
        margin-left: 30%;
        width: 130px;
        height: 140px;
    }
`;

export const GroupIcon = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 18px;

    img {
        margin: 0 27px 0 0;
        transition: 0.7s ease;
        &:hover {
            transform: translate3d(0, -6px, 0);
        }
    }

    @media (max-width: 960px) {
        justify-content: initial;
        margin-left: 20%;
    }
`;

export const Button = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 418.05px;

    a {
        outline: none;
        width: 202.92px;
        height: 59px;
        left: 719.13px;
        top: 829px;

        background: #363636;
        border-radius: 7.62859px;
        margin: 0 27px 27px 0;

        transition: 0.9s ease;

        &:hover {
            transition: 0.9s;
            transform: translate3d(0, -6px, 0);
        }
        img {
            margin: 10px 75px;
            @media (max-width: 960px){
                margin: 10px 40px;
            }
        }

        @media (max-width: 960px) {
            margin-left: -5%;
            width: 30%;
        }
        
    }
    @media (max-width: 960px) {
        margin: 4%;
        width: 100%;
    }
`;