import styled from 'styled-components'

export const Container = styled.div`
  grid-area: 1/2;
  padding-top: var(--smallPad);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  .list-wrap {
    padding-top: 1rem;
    display: grid;
    gap: 1rem;
  }
`