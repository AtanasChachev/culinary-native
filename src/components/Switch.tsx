import React from 'react';
import { Switch } from 'react-native';

const SwitchComponent = ({ value, onValueChange, trackColorTrue, trackColorFalse }:  any) => {
  
  return (
    <Switch 
      trackColor={{
        true: trackColorTrue,
        false: trackColorFalse
      }}
      onValueChange={(isSwitching: boolean) => {
        onValueChange(isSwitching);
      }}
      value={value}
    />
  )
};

export default SwitchComponent;