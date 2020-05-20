import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--boxSize));
  grid-auto-rows: var(--boxSize);
  justify-content: flex-start;
  gap: var(--smallPad);
  margin: var(--mediumPad) 0 var(--mediumPad) 0;
  padding-top: var(--smallPad);
  grid-area: 1/2;
  justify-content: center;
`