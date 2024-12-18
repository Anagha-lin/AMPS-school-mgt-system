import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0d47a1, #1e88e5); /* Cool blue gradient */
  min-height: 100vh; /* Full height of the viewport */
  color: #ffffff; /* White text for better contrast */
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 350px; /* Limit form width */
  padding: 25px;
  border: none;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent white */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Deep shadow for prominence */
  backdrop-filter: blur(10px); /* Frosted-glass effect */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #90caf9; /* Light blue border */
  border-radius: 6px;
  background-color: #e3f2fd; /* Soft light blue background */
  color: #0d47a1; /* Deep blue text */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2196f3; /* Brighter blue on focus */
    box-shadow: 0 0 6px rgba(33, 150, 243, 0.5); /* Subtle glow effect */
  }
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #1e88e5; /* Vivid blue button */
  color: #ffffff; /* White text */
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1565c0; /* Darker blue on hover */
    transform: translateY(-3px); /* Subtle lift effect */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

