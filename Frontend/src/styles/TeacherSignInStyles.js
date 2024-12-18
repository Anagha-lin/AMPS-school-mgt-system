import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TeacherSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e40af, #4338ca); /* Gradient: Vibrant indigo tones */
  min-height: 100vh; /* Full height of the viewport */
  color: #ffffff; /* White text for contrast */
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
  background-color: rgba(255, 255, 255, 0.15); /* Semi-transparent white background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Enhanced shadow for a modern look */
  backdrop-filter: blur(10px); /* Frosted glass effect */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #a5b4fc; /* Soft indigo border */
  border-radius: 6px;
  background-color: #f3f4f6; /* Light gray for input background */
  color: #111827; /* Dark text for readability */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #818cf8; /* Brighter indigo border on focus */
    box-shadow: 0 0 6px rgba(129, 140, 248, 0.5); /* Indigo glow on focus */
  }
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #6366f1; /* Vibrant indigo button */
  color: #ffffff; /* White text */
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4f46e5; /* Darker indigo on hover */
    transform: translateY(-3px); /* Subtle lift effect */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

