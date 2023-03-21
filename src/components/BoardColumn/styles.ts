import styled from 'styled-components';

export const Container = styled.div`
  width: 315px;

  border-radius: 5px;
  margin-right: 20px;
  padding: 20px 0;

  background-color: ${(props) => props.color ? props.color : '#afb6bd'};

  border-top: 5px solid rgba(0, 0, 0, 0.1);

  .column-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 20px 15px;
  }

  .column-name {
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
  }

  .column-card {
    overflow: hidden auto;
    max-height: calc(100vh - 325px);
    margin: 0 15px 0 20px
  }

  .column-button {
    display: flex;
    align-items: center;

    margin: 15px 20px 0px;

    border-radius: 5px;
    color: #FFFFFF;
    background-color: ${props => (props.color ? props.color : '#afb6bd')};

    :hover {
      box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .button-icon {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;

    margin: 10px;
  }

  .button-name {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
  }
`;

export const ContainerFormColumn = styled.div`
  display: flex;
  flex-direction: column;

  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }

    label {
      display: flex;
      justify-content: flex-start;
    }

    input {
      width: 100%;
      border: 1px solid #8a8a8a;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 16px;
      box-sizing: border-box;
      height: 40px;
      background-color: #ffffff;
      display: inline-block;
    }
  }

  .button-save {
    margin-top: 20px;
    display: flex;
    float: right;
  }
`;
