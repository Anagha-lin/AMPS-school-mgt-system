// AdminRegisterStyles.js
import styled from 'styled-components';

export const AdminRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #87CEEB, #32CD32, #FFD700); /* Gradient with light blue, lime green, and yellow */
  height: 100vh; /* Full height of the viewport */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px; /* Limit form width */
  padding: 20px;
  border: 1px solid #B0C4DE; /* Light steel blue border */
  border-radius: 8px;
  background-color: #F5F5F5; /* Light gray background */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Slightly darker shadow */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #DCDCDC; /* Gainsboro border */
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #4682B4; /* Steel blue button */
  color: white;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5F9EA0; /* Cadet blue hover effect */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

