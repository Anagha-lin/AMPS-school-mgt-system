import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  background-color: #f8f9fa; /* Light gray background */
  min-height: 100vh; /* Full viewport height */
  padding: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 25px;
  margin-left: ${({ isOpen }) => (isOpen ? '260px' : '100px')};
  transition: margin-left 0.3s ease;
  background-color: #ffffff; /* White content background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Stacks items on smaller screens */
  }
`;

export const BottomContent = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout on smaller screens */
  }
`;

export const Section = styled.section`
  margin-bottom: 30px;
  flex: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 28px; /* Slightly larger for better hierarchy */
  margin-bottom: 15px;
  color: #2c3e50; /* Dark text color */
  font-weight: bold;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px; /* Adds spacing between cards */
  justify-content: space-between;
  overflow-x: auto; /* Allows horizontal scrolling if the content overflows */
  white-space: nowrap; /* Prevents wrapping of cards */

  @media screen and (max-width: 768px) {
    justify-content: flex-start; /* Aligns cards to the left on smaller screens */
  }
`;


export const Card = styled.div`
  background-color: #e3f2fd; /* Light blue background */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* More prominent shadow */
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  text-align: center;
  flex: 1; /* Cards take equal width */

  &:hover {
    transform: translateY(-8px); /* Lift effect */
    background-color: #bbdefb; /* Slightly darker on hover */
  }
`;

export const CardTitle = styled.h3`
  display: inline-block; /* Ensures titles are horizontally aligned */
  font-size: 22px; /* Slightly larger for better emphasis */
  margin-right: 15px; /* Adds spacing between card titles */
  color: #1e88e5; /* Blue text */
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: block; /* Stacks titles vertically on smaller screens */
    margin-right: 0;
  }
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #424242; /* Neutral gray for content */
`;

export const StudentDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fafafa; /* Off-white background */
  padding: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Adjust to single column on smaller screens */
  }
`;

export const TeacherDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fafafa; /* Off-white background */
  padding: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; /* Adjust to single column on smaller screens */
  }
`;

