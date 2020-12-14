import React from "react"
import styled from "styled-components"

const Text = styled.div`
  font-size: 11px;
  color: #e3b505;
  padding 0px 5px;
`

export const FormatedDate = ({ time }) => {
  return <Text>{new Date(time * 1000).toDateString()}</Text>
}
