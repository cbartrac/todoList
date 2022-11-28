import styled from 'styled-components'

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(10px + 2vmin);
  color: white;
`

export const SearchFormContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 5vh;
  display: flex;
  margin: 0% 20%
`

export const CardsListContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding-top: 5vh;
`

export const CardContainer = styled.div`
  width: 60%;
  height: 15vh;
  border: 1px solid white;
  margin: 1vh 0vh;
  display: flex;
  justify-content: space-between;
  padding: 2.5%;
  box-sizing: border-box;
  align-items: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  height: fit-content
`

export const FontMainData = styled.a`
  font-size: 0.70em
`

export const FontExtraData = styled.a`
  font-size: 0.55em
`

export const DeleteButton = styled.button`
  width: 25%;
  height: 5vh;
  font-size: 1.75vw;
  cursor: pointer;
`
export const SearchInput = styled.input`
  width: 30%;
`

export const SearchButton = styled.button`
  width: 10%;
  height: 5vh;
  font-size: 1.5vw;
  cursor: pointer;
`