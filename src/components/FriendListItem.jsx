import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFriendListItem = styled.li`
  list-style: none;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 4px 1px gray;
  width: 40%;

  .status {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${props => (props.$online ? '#4CAF50' : '#ccc')};
  }

  .avatar {
    width: 100px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #fbf1f1;
  }

  .name {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 20px;
    flex-grow: 1;
  }
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem $online={isOnline}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
