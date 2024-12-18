import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '280px' : '80px')}; /* Expandable sidebar */
  height: 100%;
  background: linear-gradient(135deg, #2c3e50, #1a252f); /* Gradient dark background */
  color: #ecf0f1; /* Light grey text for contrast */
  overflow-y: auto; /* Enable vertical scrolling */
  padding-top: 60px;
  transition: width 0.3s ease-in-out; /* Smooth width transition */
  z-index: 110; /* Ensure sidebar stays above other content */
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5); /* Add a shadow for depth */
`;

export const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #f1c40f; /* Golden yellow for emphasis */
`;

export const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-size: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle divider */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #34495e; /* Darker hover state */
    transform: translateX(5px); /* Subtle movement on hover */
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherits the parent's color */
  margin-left: 10px;
  font-weight: 500;

  &:hover {
    color: #1abc9c; /* Light teal color for hover */
  }
`;

export const SidebarIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
  color: #ecf0f1;
`;

export const Logo = styled.img`
  width: ${({ isOpen }) => (isOpen ? '60px' : '40px')}; /* Dynamically resize based on state */
  height: auto;
  margin: 0 auto;
  transition: width 0.3s ease;
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background: #1abc9c; /* Light teal for better visibility */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for a floating effect */
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(180deg); /* Rotate button on hover */
  }
`;

export const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease-in-out;
`;

