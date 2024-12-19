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
  background-color: #ffffff; /* White content background */
  border-radius: 10px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin: 20px;
`;

export const AttendanceHeader = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #2c3e50; /* Dark text color */
  margin-bottom: 20px;
`;

export const AttendanceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AttendanceItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #dcdcdc; /* Light border */
  border-radius: 6px; /* Rounded edges */
  background-color: #f9f9f9; /* Light background */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f1f1; /* Slightly darker on hover */
  }
`;

export const StudentName = styled.span`
  flex: 1;
  font-size: 18px;
  color: #34495e; /* Slightly darker text */
`;

export const CheckboxLabel = styled.label`
  margin-right: 10px;
  font-size: 16px;
  color: #7f8c8d; /* Muted text color */
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e0e0e0; /* Light border */
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff; /* Blue background */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
  background-color: #34495e; /* Dark sidebar */
  color: #ecf0f1; /* Light text */
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Subtle shadow on sidebar */
`;

export const AttendanceDate = styled.span`
  font-weight: bold;
  color: #2c3e50; /* Dark text */
`;

export const AttendanceStatus = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: ${({ present }) => (present ? 'green' : 'red')};
  font-weight: bold;
`;

