import { useMemo } from 'react';
import { View } from 'react-native';

import { ISpace } from '@shared/ui/atoms/spacer/spacer.interface';

const Spacer = (props: ISpace) => {
  const style = useMemo(
    () => ({
      marginTop: props.top ? props.top : 0,
      marginBottom: props.bottom ? props.bottom : 0,
      marginLeft: props.left ? props.left : 0,
      marginRight: props.right ? props.right : 0,
    }),
    [props.bottom, props.left, props.right, props.top]
  );

  return <View style={style} />;
};

export default Spacer;
