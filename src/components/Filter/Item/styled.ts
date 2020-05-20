import styled from 'styled-components'

type Props = {
  active: boolean;
}

export const ItemBox = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-bottom: 1.5rem;
  align-items: center;
  &&:hover {
    cursor: pointer;
    p {
      color: var(--primary);
    }
  }
  span {
    height: 1rem;
    width: 1rem;
    background: ${(props: Props) => props.active ? "var(--primary)" : "lightgray"};  
    margin-right: 0.5rem;
  }
  p {
    margin: 0;
    color: ${(props: Props) => props.active ? "var(--primary)" : "black"};
  }
`