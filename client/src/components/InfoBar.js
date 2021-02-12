import React from 'react';
import { AiFillCloseCircle, AiOutlineComment } from 'react-icons/ai';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <AiOutlineComment className="onlineIcon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <AiFillCloseCircle className="buttonClose" />
      </a>
    </div>
  </div>
);

export default InfoBar;
