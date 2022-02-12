import React from 'react';
import Timer from './Timer/timer';
import './infoPanel.css';
import MiscInfo from './MiscInfo/miscInfo';
import TaskStatus from './TaskStatus/taskStatus';

function InfoPanel() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col1">
          <MiscInfo />
        </div>
        <div className="timerSection">
          <Timer />
        </div>
        <div className="col2">
          <TaskStatus />
        </div>
      </div>
    </div>
    </>
  )
}

export default InfoPanel;