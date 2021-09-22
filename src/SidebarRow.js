import React from "react";
import './sidebarRow.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import WhatshotIcon from '@material-ui/icons/WhatshotIcon';

function SidebarRow({ selected, title, Icon }) {
  return (
    <div>
      <div className={`sidebarRow  ${selected && 'selected'}`}>
        <Icon className='sidebarRow__icon'  />
        <h2 className='sidebarRow__title'>{title}</h2>
      </div>
    </div>
  );
}

export default SidebarRow;
