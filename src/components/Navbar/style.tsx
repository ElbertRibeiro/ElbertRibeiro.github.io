import styled from 'styled-components';

export const Navegation = styled.div`
    color: white;
    margin: 0 auto;
    display: flex;
    max-width: 1282px;
    justify-content: space-around;
    align-items: center;
`;

export const Navlist = styled.div`
    list-style: none;
    display: flex;

    @media (max-width: 960px) {
        display: none;
    }

    li {
        margin-left: 24px;        
    }

    a {
        display: inline-block;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 200;
            padding: 8px 16px;
            transition: 0.7s ease;
            position: relative;

            &::after {
                content: "";
                display: block;
                position: absolute;
                top: -40px;
                left: 50%;
                width: 2px;
                height: 0px;
                transition: 0.7s ease;
                background: linear-gradient(180deg, rgba(233, 29, 34, 0) 0%, white 100%);
            }

            &:hover {
                color: red;
                &::after {
                    height: 40px;
                }
            }
    }
`;

export const Droplink = styled.div`
    display: none;
`;