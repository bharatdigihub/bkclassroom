import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
`;

const ProfileCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  margin: 10px 0;
  color: #333;
`;

const Email = styled.p`
  color: #555;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('http://127.0.0.1:5000/profiles');
      const data = await response.json();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  const handleEdit = (profile) => {
    // Handle the edit action (e.g., open a modal or navigate to an edit page)
    console.log('Edit Profile:', profile);
  };

  return (
    <Container>
      <h2>User Profiles</h2>
      {profiles.map((profile) => (
        <ProfileCard key={profile.id}>
          <Avatar src={profile.image || 'https://via.placeholder.com/100'} alt="Profile" />
          <Name>{profile.name}</Name>
          <Email>{profile.email}</Email>
          <EditButton onClick={() => handleEdit(profile)}>Edit</EditButton>
        </ProfileCard>
      ))}
    </Container>
  );
};

export default ProfileList;
