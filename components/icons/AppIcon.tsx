import React, { ReactElement } from 'react';

interface AppIconProps {
  Icon: ReactElement<any, any>, 
  onclick?: Function,  
  classes?: string 
}

const AppIcon: React.FC<AppIconProps> = (props) => {

  const {Icon, onclick = () => {}, classes = ''} = props

  return (
    <div
      onClick={onclick.bind(null)}
      className={classes}
    >
      {Icon}

    </div>
  )
};

export default AppIcon;
