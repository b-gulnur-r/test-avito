import React from "react"
import styled from "styled-components"

const NewScore = styled.div`
  font-size: 14px;
  color: #db504a;
  padding: 0px 8px;
`

const rating = [1, 2, 3, 4, 5]

export const Rating = ({ score }) => {
    return (
        <NewScore>
            {rating.map((item) => {
                return item <= score ? (
                    <i className="fas fa-star" key={item}></i>
                ) : (
                        <i className="far fa-star" key={item}></i>
                    )
            })}
        </NewScore>
    )
}
