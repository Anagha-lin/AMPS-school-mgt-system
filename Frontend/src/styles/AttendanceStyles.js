import styled from 'styled-components';

export const AttendanceContainer = styled.div`
  display: flex;
  padding-left: 250px;
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

export const AttendanceContent = styled.div`
  padding: 30px;
  background-color: #ffffff; /* White background for content */
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin: 20px;
`;

export const AttendanceHeader = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #2c3e50; /* Dark text color */
  margin-bottom: 20px;
  text-align: center; /* Centered header */
`;

export const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AttendanceItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #dcdcdc; /* Light border */
  border-radius: 8px; /* Slightly rounded corners */
  background-color: #f9f9f9; /* Light gray background */
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f1f1f1; /* Slightly darker background on hover */
    transform: translateY(-3px); /* Subtle lift effect */
  }
`;

export const StudentName = styled.span`
  flex: 1;
  font-size: 18px;
  color: #34495e; /* Dark text */
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #7f8c8d; /* Muted gray text */
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e0e0e0; /* Light horizontal divider */
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff; /* Blue background */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 8px; /* Rounded edges */
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px; /* Adjusted padding for smaller screens */
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Fixed width for sidebar */
  background-color: #34495e; /* Dark blue-gray sidebar */
  color: #ecf0f1; /* Light text */
  padding: 20px;
  height: 100vh; /* Full height */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for sidebar */
`;

export const AttendanceDate = styled.span`
  font-weight: bold;
  color: #2c3e50; /* Dark text for date */
`;

export const AttendanceStatus = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ present }) => (present ? 'green' : 'red')}; /* Dynamic color based on attendance */
`;

