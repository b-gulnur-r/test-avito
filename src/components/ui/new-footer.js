import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Footer = ({ children }) => {
  return <Container>{children}</Container>
}
