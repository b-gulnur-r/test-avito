import React, { useEffect, useCallback } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getNews } from "../../redux/ducks"
import { NewCard } from "./ui/new-card"
import { Loader } from "../ui/loader/loader"

const NewList = styled.ul`
  padding: 20px;
`

const RefreshButton = styled.button`
  background-color: #56a3a6;
  color: black;
`

export const News = () => {
  const dispatch = useDispatch()
  const news = useSelector((state) => state.news.news)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getNews())
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [dispatch])

  useEffect(() => {
    !news && dispatch(getNews())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handlerRefreshNews = useCallback(() => {
    dispatch(getNews())
  }, [dispatch])

  if (!news) {
    return <Loader />
  }

  return (
    <div>
      <RefreshButton onClick={handlerRefreshNews}>Refresh news</RefreshButton>
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
