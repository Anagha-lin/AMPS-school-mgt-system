import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e293b, #475569); /* Gradient background: Dark blue-gray to lighter blue-gray */
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Deeper shadow for a modern feel */
  backdrop-filter: blur(10px); /* Blurred effect for background */
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 12px 0;
  border: 1px solid #94a3b8; /* Subtle gray border */
  border-radius: 6px;
  background-color: #f8fafc; /* Very light gray for input background */
  color: #0f172a; /* Dark text for readability */
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #3b82f6; /* Bright blue border on focus */
    box-shadow: 0 0 6px rgba(59, 130, 246, 0.5); /* Blue glow on focus */
  }
`;

export const SubmitButton = styled(Link)`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background-color: #2563eb; /* Vibrant blue */
  color: #ffffff; /* White text */
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e40af; /* Darker blue on hover */
    transform: translateY(-3px); /* Subtle lift on hover */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

