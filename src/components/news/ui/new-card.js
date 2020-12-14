import React from "react"
import styled from "styled-components"
import { Rating } from "./rating"

const Container = styled.li`
  padding: 10px;
  max-width: 700px;
  box-shadow: 0px 0px 2px 2px rgba(79, 109, 122, 0.2);
  margin-bottom: 30px;
  border-radius: 5px;
`
const NewTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
  color: #56a3a6;
`
const NewText = styled.div`
  font-size: 11px;
  color: #4f6d7a;
`
const NewDate = styled.div`
  font-size: 11px;
  color: #e3b505;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NewCard = ({ title, by, score, time }) => {
    return (
        <Container>
            <NewTitle>{title}</NewTitle>
            <Footer>
                <NewText>{by}</NewText>
                <Rating score={score} />
                <NewDate>{new Date(time * 1000).toDateString()}</NewDate>
            </Footer>
        </Container>
    )
}
