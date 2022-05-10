import styled from "styled-components";

export const Section = styled.section`
    .page-list__header {
        display: flex;
        padding-top: 90px;
        margin-bottom: 78px;
        align-items: center;
        justify-content: space-between;

        h2 {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 110.2%;
            color: #FFFFFF;
        }

        input {
            border: 1px solid white;
            background: none;
            border-radius: 5px;
            height: 48px;
            width: 426px;
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 22px;
            color: #363842;
            padding: 8px 8px 8px 40px;
            box-sizing: border-box;
        }
    }

    .page-list__content {
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 30px;
            row-gap: 70px;

            button {
                background: none;
                text-align: left;
                cursor: pointer;
            }

            li {
                width: 301px;

                img {
                    width: 301px;
                    height: 413px;
                    border-radius: 4px;
                }

                h3 {
                    margin-top: 16px;
                    font-family: 'Poppins', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 19.35px;
                    line-height: 29px;
                    color: #E5E5E5;
                }

                &.branndon {
                    border: 1.5px solid #212428;
                    display: flex;
                    justify-content: center;
                    width: 301px;
                    height: 413px;
                    border-radius: 4px;

                    button {
                        font-family: 'Poppins', sans-serif;
                        font-style: normal;
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 39px;

                        span {
                            font-family: 'Poppins';
                            font-style: normal;
                            font-weight: 600;
                            font-size: 17.2px;
                            line-height: 26px;
                        }
                    }
                }
            }
        }
    }
`;