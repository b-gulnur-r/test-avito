import React from "react"
import styled from "styled-components"

import { FormatedDate } from "../../ui/date"
import { Footer } from "../../ui/new-footer"
import { NewTitle } from "../../ui/new-title"
import { SimpleText } from "../../ui/simple-text"


const Container = styled.div`
  padding: 10px;
  box-shadow: 0px 0px 2px 2px rgba(79, 109, 122, 0.2);
  background-color: rgb(238, 245, 228);
  margin: 0px 20px;
  border-radius: 5px;
`

export const Comment = ({ comments }) => {
  return (
    <div>
      <NewTitle color="#2b6668;">Comments:</NewTitle>
      {comments.map(({ id, by, text, time }) => {
        return (
          <Container key={id}>
            <div>{text}</div>
            <Footer>
              <>
              <SimpleText color="blue">{by}</SimpleText>
              <FormatedDate time={time}/>
              </>
            </Footer>
          </Container>
        )
      })}
    </div>
  )
}
