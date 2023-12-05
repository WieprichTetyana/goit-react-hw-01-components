import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 1cqw;
  width: 300px;
  display: inline-block;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
const Label = styled.span`
  display: block;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Percentage = styled.span`
  display: block;
  font-size: 20px;
  color: #1ac6aa;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledSection = styled.section`
  width: 50%;

  border: 1px solid black;
  margin: 20px auto;

  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <StyledSection className="statistics">
      {title && <StyledH2 className="title">{title}</StyledH2>}
      <StyledUl className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StyledListItem key={id} $backgroundColor={generateRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StyledListItem>
        ))}
      </StyledUl>
    </StyledSection>
  );
};
