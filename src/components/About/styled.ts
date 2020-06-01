import styled from "styled-components"

export const Container = styled.div`
  .top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
    .title {
      font-size: var(--titleSize);
    }
  }
  .about-text {
    line-height: 140%;
    p {
      margin: var(--smallestPad) 0 0 0;
    }
  }
`
