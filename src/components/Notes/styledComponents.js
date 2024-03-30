// Style your elements here

import styled from 'styled-components'

export const MainCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainHead = styled.h1`
  font-size: 30px;
  color: blue;
`
export const SubCont = styled.div`
  box-shadow: 1px 1px 3px 1px lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Input = styled.input`
  border: none;
  outline: none;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: blue;
`

export const UnList = styled.un`
  display: flex;
  list-style-type: none;
`

export const NoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100px;
  height: auto;
`

export const NoHead = styled.h1`
  color: black;
  font-size: 20px;
`

export const NoPara = styled.p`
  color: lightgrey;
  font-size: 10px;
`
