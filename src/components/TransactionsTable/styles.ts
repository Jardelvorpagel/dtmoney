import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th, td {
      color: var(--text-body);
      padding: 1rem 2rem;
    }

    th {
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      border: 0;
      background-color: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title)
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`