import styled from '@emotion/styled'
import React from 'react'

const TooltipWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    .tooltip {
      visibility: visible;
    }
  }
`

const TooltipBox = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: -36px;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(113, 119, 132, 0.2);
  color: #000000;
  text-align: center;
  word-break: keep-all;
  font-size: 13px;
`

interface TooltipProps {
  children: React.ReactNode
  tip: string
  width?: number
}

const Tooltip = ({ width, children, tip }: TooltipProps) => {
  return (
    <TooltipWrapper>
      {children}
      <TooltipBox style={{ width }} className="tooltip">
        {tip}
      </TooltipBox>
    </TooltipWrapper>
  )
}

export default Tooltip
