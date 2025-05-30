import { IRadioGroupProps } from '@shared/ui/molecules/radio/radio.interface';
import RadioBase from '@shared/ui/molecules/radio/RadioBase';
import React, { useState } from 'react';
import { View } from 'react-native';

const RadioGroup = ({
  style,
  children,
  defaultValue,
  onValueChange,
}: IRadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelect = (value: any) => {
    setSelectedValue(value);
    onValueChange?.(value);
  };

  return (
    <View style={style}>
      {React.Children.map(children, (child) => {
        // 자식 요소가 Radio 컴포넌트인지 확인합니다.
        if (React.isValidElement(child) && child.type === RadioBase) {
          // props를 주입하여 상태를 제어합니다.
          return React.cloneElement(child, {
            selectedValue,
            onSelect: handleSelect,
          });
        }
        return child;
      })}
    </View>
  );
};

export default RadioGroup;
