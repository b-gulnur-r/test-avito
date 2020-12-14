import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import styled from "styled-components"
import { Rating } from "./rating"
import { setCurrentNew } from "../../../redux/ducks"
import { NewTitle } from "../../ui/new-title"
import { Footer } from "../../ui/new-footer"
import { FormatedDate } from "../../ui/date"
import { SimpleText } from "../../ui/simple-text"

const Container = styled.li`
  padding: 10px;
  max-width: 700px;
  box-shadow: 0px 0px 2px 2px rgba(79, 109, 122, 0.2);
  margin-bottom: 30px;
  border-radius: 5px;
`

export const NewCard = (item) => {
  const { id, title, by, score, time } = item
  const dispatch = useDispatch()
  return id ? (
    <Link to={`news/${id}`}>
      <Container
        onClick={() => {
          dispatch(setCurrentNew(item))
        }}
      >
        <NewTitle>{title}</NewTitle>
        <Footer>
          <>
            <SimpleText>{by}</SimpleText>
            <Rating score={score} />
            <FormatedDate time={time} />
          </>
        </Footer>
      </Container>
    </Link>
  ) : null
}
