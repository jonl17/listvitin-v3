import styled from "styled-components"

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  .search-wrap {
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
      i {
        color: gray;
      }
    }
    input {
      height: var(--smallPad);
      font-size: 1rem;
      outline: none;
      width: 100%;
      margin: 0;
      box-sizing: border-box;
      padding-left: var(--smallPad);
      border: 1px solid gray;
      border-radius: 4px;
      :focus {
        border: 1px solid var(--primary);
        outline: none;
      }
    }
  }
`
