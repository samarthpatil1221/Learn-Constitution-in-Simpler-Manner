import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import image1 from '../images/image1.jpg'; // Replace with actual paths
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const TeamMembers = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const teamMembers = [
    {
      name: 'Rahul Kamble',
      image: image1,
      qualification: 'B.Tech in Computer Science',
      contactNo: '9545962048', // Added contact number
      email: 'rahul.kamble@example.com', // Added email
    },
    {
      name: 'Samarth Patil',
      image: image2,
      qualification: 'B.Tech in Computer Science',
      contactNo: '8855808424', // Added contact number
      email: 'samarth.patil@example.com', // Added email
    },
    {
      name: 'Shekhar Patil',
      image: image3,
      qualification: 'B.Tech in Computer Science',
      contactNo: '9325008581', // Added contact number
      email: 'shekhar.patil@example.com', // Added email
    },
    {
      name: 'Aditya Shinde',
      image: image4,
      qualification: 'B.Tech in Computer Science',
      contactNo: '9561156506', // Added contact number
      email: 'aditya.shinde@example.com', // Added email
    },
  ];

  const aimOfProject = "Our aim is to create an engaging platform that simplifies the understanding of the Constitution for all citizens.";

  // Styles
  const styles = {
    teamSection: {
      backgroundColor: '#f9f9f9',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '20px auto',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#333',
    },
    teamCard: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '20px', // Space between team member cards
    },
    teamMember: {
      backgroundColor: '#ffffff',
      padding: '30px', // Increased padding for larger boxes
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      flex: '1 1 calc(45% - 20px)', // Adjust width for larger boxes (two members per row)
      minWidth: '200px', // Minimum width for responsiveness
    },
    memberImage: {
      width: '120px', // Increased image size
      height: '120px', // Increased image size
      borderRadius: '50%',
      marginBottom: '10px',
    },
    memberName: {
      fontSize: '1.5rem', // Increased font size
      fontWeight: 'bold',
      margin: '10px 0',
    },
    memberQualification: {
      fontSize: '1.1rem', // Increased font size
      color: '#666',
    },
    memberContact: {
      fontSize: '1rem', // Styling for contact information
      color: '#444',
      margin: '5px 0',
    },
    projectAim: {
      marginTop: '30px',
      textAlign: 'center',
    },
    aimTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    aimDescription: {
      fontSize: '1rem',
      color: '#444',
    },
    homeButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: 'green', // Change button color to green
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'block', // Make button a block element
      marginLeft: 'auto', // Center the button
      marginRight: 'auto', // Center the button
    },
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the homepage using navigate
  };

  return (
    <div style={styles.teamSection}>
      <h2 style={styles.sectionTitle}>Meet Our Developers</h2>
      <div style={styles.teamCard}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.teamMember}>
            <img src={member.image} alt={`${member.name}`} style={styles.memberImage} />
            <h3 style={styles.memberName}>{member.name}</h3>
            <p style={styles.memberQualification}>{member.qualification}</p>
            <p style={styles.memberContact}><strong>Contact No:</strong> {member.contactNo}</p> {/* Display Contact */}
            <p style={styles.memberContact}><strong>Email:</strong> {member.email}</p> {/* Display Email */}
          </div>
        ))}
      </div>
      <div style={styles.projectAim}>
        <h2 style={styles.aimTitle}>Aim of the Project</h2>
        <p style={styles.aimDescription}>{aimOfProject}</p>
      </div>
      <button onClick={handleHomeClick} style={styles.homeButton}>Home</button>
    </div>
  );
};

export default TeamMembers;
