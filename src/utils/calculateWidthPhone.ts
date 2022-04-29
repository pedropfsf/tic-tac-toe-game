import { Dimensions } from 'react-native';

function calculateWidthPhone(length: number) {
  const phoneWidth = Dimensions.get('window').width;

  return phoneWidth - length;
}

export default calculateWidthPhone;