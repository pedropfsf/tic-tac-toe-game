import styled from "styled-components/native";

import calculateDistanceBarHeight from "../../utils/calculateDistanceBarHeight";
import calculateWidthPhone from '../../utils/calculateWidthPhone';
import colors from "../../styles/colors";


export const AreaScreen = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.background};

  padding-top: ${calculateDistanceBarHeight(24)}px;
`;

export const Container = styled.View`
  width: ${calculateWidthPhone(56)}px;

  flex: 1;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 32px;
`;

export const AreaStatusPlayers = styled.View`
  justify-content: center;
  align-items: center;
  `;

export const AreaButtons = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;  