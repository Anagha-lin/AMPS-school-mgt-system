// AdminDashboardStyles.js
import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  background-color: #f8f9fa;
`;

export const Content = styled.div`
  flex: 1;
  padding: 25px;
  margin-left: ${({ isOpen }) => (isOpen ? '260px' : '100px')};
  transition: margin-left 0.3s ease;
  background-color: #ffffff;
`;

export const TopContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;

export const BottomContent = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;

export const Section = styled.section`
  margin-bottom: 30px;
  flex: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 15px;
  color: #2c3e50;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background-color: #e3f2fd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: translateY(-8px);
    background-color: #bbdefb;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
  color: #1e88e5;
`;

export const CardContent = styled.p`
  font-size: 15px;
  color: #424242;
`;

export const StudentDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fafafa;
`;

export const TeacherDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fafafa;
  padding: 20px;
`;

