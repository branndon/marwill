import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    border: 1px solid red;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: black;
    width: 95%;
    max-height: 85%;
    border: 1px solid #FFEF97;
    border-radius: 35px;
    padding: 80px;
    box-sizing: border-box;
    overflow-y: scroll;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom: 1px solid #9EA5A9;
        padding-bottom: 40px;

        &__infos {
            display: flex;

            .img {
                width: 287px;
                /* height: 287px; */
                background: lightgray;
                border-radius: 100%;
            }

            .content {
                margin-left: 40px;

                h3 {
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 40px;
                    line-height: 60px;
                }
                p {
                    margin-top: 16px;
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 300;
                    font-size: 22px;
                    line-height: 33px;
                    max-width: 50%;
                }
            }
        }

        &__close {
            button {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 40px;
                line-height: 58px;
                color: #9EA5A9;
                cursor: pointer;
            }
        }
    }

    .main-content {
        display: flex;
        gap: 135px;
        margin-top: 60px;

        h4 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 50px;
            line-height: 75px;
            margin-bottom: 32px;
        }

        p,
        button {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 33px;
        }
    }
`;
