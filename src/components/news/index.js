import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../../redux/ducks"
import { NewCard } from "./ui/new-card"

const NewList = styled.ul`
  padding: 20px;
`


export const News = () => {
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news.news)

  useEffect(() => {
    dispatch(getNews())
  }, [dispatch])

  if (!news) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {news && (
        <NewList>
          {news.map((item) => (
            <NewCard key={item.id} {...item} />
          ))}
        </NewList>
      )}
    </div>
  )
}
