import styled from 'styled-components';

export const AdminRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  background: linear-gradient(135deg, #8e44ad, #3498db, #2ecc71); /* Modern gradient background */
  height: 100vh; /* Full height of the viewport */
  padding: 20px;
  color: #ecf0f1; /* Light text for contrast */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px; /* Increased form width for better layout */
  padding: 30px;
  border-radius: 12px; /* Rounded corners for modern feel */
  background-color: #ffffff; /* Clean white form background */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Subtle hover effect */
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 12px 0;
  border: 1px solid #bdc3c7; /* Soft grey border */
  border-radius: 8px; /* Rounded corners */
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db; /* Blue focus border */
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5); /* Glow effect */
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #e74c3c, #e67e22); /* Gradient button background */
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #c0392b, #d35400); /* Darker gradient on hover */
    transform: translateY(-3px); /* Lift button slightly */
  }

  &:active {
    transform: translateY(0); /* Reset on click */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

