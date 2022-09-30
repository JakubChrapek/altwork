import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function ActualYear({rok}) {

    const data = useStaticQuery(graphql`
        query MyQuery {
            datoCmsPageHome (isActual: {eq: true}){
                kolorRoku{
                  hex
                }
                rok
            }
        }
    `)
    if(rok === data.datoCmsPageHome.rok){
        return null
    }

    return (
        <Wrapper kolor={data.datoCmsPageHome.kolorRoku.hex}>
            <Container>
                <span className="text">Aktualnie przeglądasz alt:work&nbsp;{rok}. Zobacz aktualną edycję konferencji z&nbsp;{data.datoCmsPageHome.rok}&nbsp;roku </span><Link className="link" to='/'>Kliknij tutaj</Link>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    right: 0;
    background-color: ${props => props.kolor};
    padding: 10px 0;

    @media(max-width: 972px){
        top: unset;
        bottom: 0;
    }

    .text{
        display: block;
        margin-right: 24px;
    }
    .link{
        min-width: max-content;
        padding: 8px 32px;
        background: #FFFFFF;
        border: 2px solid #000000;
        display: block;
        border-radius: 10000px;
        font-family: 'Diagramm';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 100%;
        text-align: center;
        color: #000000;
        text-decoration: none;
    }
`

const Container = styled.div`
    margin: 0 auto;
    max-width: var(--content-max-width-desktop);
    padding: 0 8.75rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1366px) {
    padding: 0 5.75rem 0;
    }
    @media (max-width: 1024px) {
    padding: 0 3.75rem 0;
    }

    @media (max-width: 767px) {
    max-width: 100%;
    padding: 0 2.25rem;
    }

    @media (max-width: 550px) {
        flex-direction: column;
        text-align: center;

        .text{
            padding-right: 0;
            padding-bottom: 12px;
        }
    }
`