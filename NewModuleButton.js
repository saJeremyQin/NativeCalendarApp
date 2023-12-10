import React, { useState } from 'react';
import { NativeModules, View, Button} from 'react-native';
import NativeCalendarModule from './NativeCalendarModule';

const NewModuleButton = () => {
  const {DEFAULT_EVENT_NAME} = NativeCalendarModule.getConstants();
  const [buttonTitle, setButtonTitle] = useState("Click to invoke getConstants!");
  
  const onPress = () => {
    // NativeCalendarModule.createCalendarEvent("foo","bar");
    setButtonTitle(DEFAULT_EVENT_NAME);
  };

  return (
    <View style={{ backgroundColor: "green" }}>
      <Button
        title={buttonTitle}
        color="#841584"
        onPress={onPress}
        style={{ fontsize:16 }}
      />
    </View>
   );
};

export default NewModuleButton;