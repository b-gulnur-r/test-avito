import React from "react"
import styled from "styled-components"

const StyledText = styled.div`
  font-size: 11px;
  padding 0px 5px;
  ${({ color }) => `color: ${color};`}
`

export const SimpleText = ({ children, color = "#4f6d7a" }) => {
  return <StyledText color={color}>{children}</StyledText>
}
