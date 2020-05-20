import styled from "styled-components"

export const Container = styled.div`

  margin-top: var(--mediumPad);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  .search-wrap {
    margin-top: var(--smallPad);
    position: absolute;
    top: 0;
    display: flex;
    .icon-wrap {
      height: 100%;
      width: var(--smallPad);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 1px;
    }
    input {
      height: var(--smallPad);
      font-size: 16px;
      outline: none;
      width: 100%;
      margin: 0;
      box-sizing: border-box;
      padding-left: var(--smallPad);
    }

  }
`
