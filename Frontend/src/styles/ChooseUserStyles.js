import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChooseUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6); /* Gradient background: navy to light blue */
  color: #ffffff; /* White text for contrast */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around; /* Space items evenly horizontally */
    align-items: center;
  }
`;

export const UserSection = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1); /* Transparent white background for user sections */
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Soft shadow for a floating effect */
  margin: 15px;

  @media screen and (min-width: 768px) {
    padding: 30px;
    text-align: left; /* Align text to the left for larger screens */
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff; /* White for title */

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled(Link)`
  background-color: #2563eb; /* Blue background for button */
  color: #ffffff; /* White text for button */
  border: none;
  padding: 12px 24px;
  margin-top: 15px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for button */

  &:hover {
    background-color: #1e40af; /* Darker blue on hover */
    transform: translateY(-3px); /* Subtle lift effect on hover */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

