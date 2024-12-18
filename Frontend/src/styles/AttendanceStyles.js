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
  margin:

