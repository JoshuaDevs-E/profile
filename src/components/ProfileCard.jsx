// src/components/ProfileCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './ProfileCard.css';

const ProfileCard = ({ name, role, imageUrl, socialLinks, isDarkMode }) => {
  return (
    <div className={`profile-card ${isDarkMode ? 'dark-theme' : ''}`}>
      <div className="header-background" style={{ backgroundImage: `url('./../public/fomdo.jpg')`, height: '60%', backgroundSize: 'cover', position: 'absolute', width: '100%', top: 0, left: 0, zIndex: -1 }}></div>
      <div className="content">
        <div className="main-content">
          <img className="profile-img" src={imageUrl} alt={`${name}'s Foto`} />
          <h1>{name}</h1>
          <p>{role}</p>
        </div>

        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon btn btn-primary" // Añade la clase btn btn-primary aquí
            >
              {/* Utiliza FontAwesomeIcon con el icono correspondiente */}
              {link.name === 'Instagram' && <FontAwesomeIcon icon={faInstagram} />}
              {link.name === 'GitHub' && <FontAwesomeIcon icon={faGithub} />}
              {link.name === 'Threads' && <FontAwesomeIcon icon={faComments} />}
              {/* Agrega más iconos según sea necesario */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
