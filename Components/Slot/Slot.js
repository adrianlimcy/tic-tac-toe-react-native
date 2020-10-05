import React from 'react';
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Filled from './Filled'

const SlotWrapper = styled(View)`
  width: ${Dimensions.get('window').width * 0.3};
  height: ${Dimensions.get('window').width * 0.3};
  background-color: grey;
  border: 1px solid #fff;
`;

const SlotIcon = styled(View)`
  background-color: #fff;
  color: #000;
`;

const Slot = ({ index, filled, handleOnPress }) => (
  <TouchableWithoutFeedback onPress={()=> !filled && handleOnPress(index)}>
    <SlotWrapper>
      <Filled filled={filled} />
    </SlotWrapper>
  </TouchableWithoutFeedback>
  
);

export default Slot;
