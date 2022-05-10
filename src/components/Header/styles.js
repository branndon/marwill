import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 32px;
    position: relative;
    background: transparent;
    box-sizing: border-box;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);


    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div {
        position: relative;

        &:first-child {
            &:before {
                position: absolute;
                content: '';
                height: 2px;
                width: 43px;
                background: #FFD900;
                display: block;
                bottom: -34px;
                left: 0;
            }
        }

        select {
            border: 0;
            color: white;
            cursor: pointer;
            background: none;
        }
    }
`;
