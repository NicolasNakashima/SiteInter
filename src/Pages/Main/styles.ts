import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 48px;
    
    `
)

export const Container = styled.div(
    () => css`

    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    
    
    `
)

export const Title = styled.h2(
    () => css`
    font-weight: 500;

    
    
    `
)
