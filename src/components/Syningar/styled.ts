import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--boxSize));
  grid-auto-rows: var(--boxSize);
  justify-content: space-between;
  margin-right: var(--mediumPad);
  gap: var(--mediumPad);
  margin-top: var(--mediumPad);
`