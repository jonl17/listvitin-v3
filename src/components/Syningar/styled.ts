import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--boxSize));
  grid-auto-rows: var(--boxSize);
  justify-content: flex-start;
  gap: var(--smallPad);
  margin: var(--mediumPad) var(--mediumPad) var(--mediumPad) 0;
  padding-top: var(--smallPad);
`