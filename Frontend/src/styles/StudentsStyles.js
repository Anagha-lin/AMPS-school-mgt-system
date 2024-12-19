import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5; /* Light background for the main container */
  min-height: 100vh; /* Full viewport height */

  @media screen and (max-width: 768px) {
    padding: 10px; /* Reduced padding for smaller screens */
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const StudentsContent = styled.div`
  padding: 20px;
  background-color: #ffffff; /* White background for content */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for elevation */
`;

export const StudentsHeader = styled.h2`
  font-size: 28px; /* Larger font for better emphasis */
  margin-bottom: 20px;
  color: #2c3e50; /* Dark text color */
  font-weight: bold;
  text-align: center; /* Centered header */
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9; /* Neutral background for list items */
  border-radius: 8px;
  padding: 15px 20px; /* Increased padding for better spacing */
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align content vertically */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
  }
`;

export const StudentName = styled.span`
  font-size: 16px;
  color: #333; /* Neutral text color */
`;

export const RemoveButton = styled.button`
  background-color: #e74c3c; /* Red background for remove button */
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b; /* Darker red on hover */
  }
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between input and button */
`;

export const AddStudentInput = styled.input`
  padding: 10px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    border-color: #007bff; /* Blue border on focus */
    outline: none;
  }
`;

export const AddStudentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Blue background for add button */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

