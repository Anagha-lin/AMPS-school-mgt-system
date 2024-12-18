import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: #282c34; /* Dark navy blue for navbar */
  color: #ffffff; /* White text */
  font-family: 'Roboto', sans-serif;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: auto;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NavLink = styled.a`
  margin-right: 15px;
  color: #f0f0f0; /* Light gray for nav links */
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb; /* Soft blue on hover */
  }

  @media screen and (max-width: 768px) {
    margin: 5px 10px;
    font-size: 14px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;

export const LoginButton = styled.button`
  background-color: #4caf50; /* Green for login */
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  @media screen and (max-width: 768px) {
    padding: 8px 14px;
    font-size: 12px;
  }
`;

export const GuestButton = styled.button`
  color: #282c34;
  border: 2px solid #61dafb; /* Soft blue border */
  padding: 10px 18px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #61dafb; /* Soft blue on hover */
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    padding: 8px 14px;
    font-size: 12px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #282c34, #3c4048); /* Gradient background */
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const SchoolInfo = styled.div`
  margin-top: 20px;
`;

export const SchoolImage = styled.img`
  width: 80%;
  max-height: 70vh;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #61dafb; /* Soft blue */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const LoremTextContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  font-size: 18px;
  color: #f0f0f0; /* Light gray for text */
  text-align: justify;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AdminRegisterLink = styled(Link)`
  color: #f0f0f0;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
    color: #61dafb; /* Soft blue on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

