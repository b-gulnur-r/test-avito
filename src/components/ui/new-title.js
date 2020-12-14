import React from "react"
import styled from "styled-components"

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
  ${({ color }) => `color: ${color};`}
`

export const NewTitle = ({ children, color = "#56a3a6" }) => {
  return <Title color={color}>{children}</Title>
}
