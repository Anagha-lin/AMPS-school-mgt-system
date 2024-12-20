// ClassesStyles.js
import styled from 'styled-components';

// Outer container
export const ClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`;

// Sidebar container
export const SidebarContainer = styled.div`
  width: 20%; /* Reduce width for sidebar */
  min-width: 200px;
  background-color: #f4f4f4;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

// Main content
export const Content = styled.div`
  flex: 1;
  margin-left: auto; /* Push content to the right */
  padding: 20px;
  background-color: #ffffff;
`;

// Header for the classes section
export const ClassHeader = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: #333333;
  margin-bottom: 20px;
`;

// List container for classes
export const ClassList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left within the content */
  gap: 15px;
`;

// Individual class item
export const ClassItem = styled.div`
  background-color: #e8f4fc;
  border: 1px solid #cce7f6;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: left;
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #1e81b0;
  }
`;

