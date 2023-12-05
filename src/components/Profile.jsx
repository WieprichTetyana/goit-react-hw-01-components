import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  .profile {
    width: 40%;
    padding: 20px 10px;
    border: 1px solid black;
    margin: 20px auto;
    border-radius: 20px;
  }

  .description {
    text-align: center;
    background-color: #f1efef;
    border-radius: 10px;
    padding: 20px 20px;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .name {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .tag {
    font-size: 20px;
    color: #888;
    margin-bottom: 10px;
  }

  .location {
    font-size: 20px;
    color: #888;
  }

  .stats {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    display: flex;
    gap: 20px;
    flex-direction: row;
  }

  .stats li {
    padding: 20px 0;
    width: 100vh;
    border-radius: 8px;
    box-shadow: 2px 2px 4px 1px gray;
    text-align: center;
    transition: 0.3s all ease;
  }

  .label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  .quantity {
    color: #888;
  }
`;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </ProfileContainer>
  );
};
