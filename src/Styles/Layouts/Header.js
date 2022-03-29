import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #fff;
  height: 4.5rem;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0/10%);
  padding: 0.5rem 5rem;

  .navbar-container {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .navbar-item {
    align-items: center;
    display: flex;
    flex: 1 1 auto;

    .navbar-menu {
      display: flex;
      a {
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.813rem;
        letter-spacing: 0.025rem;
        padding: 0 1rem;

        &.active {
          font-weight: bold;
        }
        &:hover {
          font-weight: bold;
        }
        &:visited {
          color: unset;
        }
      }
    }

    &.item-right {
      justify-content: flex-end;
    }
  }
`;
