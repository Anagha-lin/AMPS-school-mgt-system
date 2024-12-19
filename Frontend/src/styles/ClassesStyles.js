import styled from 'styled-components';

export const ClassesContainer = styled.div`
  display: flex;
  padding-left: 240px;
  background: linear-gradient(135deg, #ecf0f1, #bdc3c7); /* Light gradient background */
  min-height: 100vh; /* Full viewport height */
  transition: padding-left 0.3s ease;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ClassesContent = styled.div`
  padding: 25px;
  background-color: #ffffff; /* White content background */
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin: 20px;
`;

export const ClassesHeader = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #2c3e50; /* Dark text color */
  margin-bottom: 20px;
  text-align: center; /* Centered header */
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ClassItem = styled.li`
  background-color: #f9f9f9; /* Light gray background */
  border-radius: 8px; /* Rounded corners */
  padding: 15px 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f1f1f1; /* Slightly darker background on hover */
    transform: translateY(-3px); /* Subtle lift effect */
  }
`;

export const AddClassForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px; /* Spacing between form elements */
`;

export const AddClassInput = styled.input`
  padding: 10px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

export const AddClassButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Blue background */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap items for responsive design */
  gap: 20px; /* Space between items */
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Fixed sidebar width */
  background-color: #34495e; /* Dark blue-gray sidebar */
  color: #ecf0f1; /* Light text */
  padding: 20px;
  height: 100vh; /* Full height */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

export const ClassHeader = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50; /* Dark text */
  margin-bottom: 25px;
`;

export const GradeHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #7f8c8d; /* Muted gray text */
  margin-bottom: 15px;
  text-align: center; /* Centered grade header */
`;

