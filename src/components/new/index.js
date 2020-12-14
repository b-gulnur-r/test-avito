import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"

import { getComment } from "../../redux/ducks/commets"

import { Comment } from "./ui/comment"
import { NewTitle } from "../ui/new-title"
import { Footer } from "../ui/new-footer"
import { FormatedDate } from "../ui/date"
import { SimpleText } from "../ui/simple-text"

const Container = styled.div`
  padding: 10px;
  box-shadow: 0px 0px 2px 2px rgba(79, 109, 122, 0.2);
  margin: 30px;
  border-radius: 5px;
`

const Url = styled.a`
  font-size: 12px;
  color: #9780ea;
`

export const New = () => {
  let { newId } = useParams()
  const dispatch = useDispatch()
  const history = useHistory()
  const {
    news: { currentNew },
    comments,
  } = useSelector((state) => state)

  useEffect(() => {
    newId && dispatch(getComment(newId))
  }, [dispatch, newId])

  const textComments = comments.comments ? comments.comments.length : 0

  return (
    <div>
      <button
        onClick={() => {
          history.goBack()
        }}
      >
        <i
          style={{ paddingRight: 5 }}
          className="fas fa-chevron-circle-left"
        ></i>
        Go back to news
      </button>
      {!!currentNew ? (
        <Container>
          <NewTitle>{currentNew.title}</NewTitle>
          <Url href={currentNew.url}>{currentNew.url}</Url>
          <Footer>
            <>
              <SimpleText color="#db504a">{`Comments: ${textComments}`}</SimpleText>
              <SimpleText>{currentNew.by}</SimpleText>
              <FormatedDate time={currentNew.time} />
            </>
          </Footer>
          {comments.comments && <Comment comments={comments.comments} />}
        </Container>
      ) : <Container><SimpleText color="red">Error: not found</SimpleText></Container>}
    </div>
  )
}
