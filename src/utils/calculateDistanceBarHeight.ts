import Constants from 'expo-constants';

function calculateDistanceBarHeight(length: number) {
  const barHeightSpace = Constants.statusBarHeight;

  return barHeightSpace + length;
}

export default calculateDistanceBarHeight;