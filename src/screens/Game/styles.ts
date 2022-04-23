import styled from "styled-components/native";

import calculateDistanceBarHeight from "../../utils/calculateDistanceBarHeight";
import colors from "../../styles/colors";

export const AreaScreen = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;

  background-color: ${colors.background};

  padding-top: ${calculateDistanceBarHeight(16)}px;
`;

export const PanelStatusPlayers = styled.View`
  width: 100%;

  justify-content: space-around;
  align-items: center;

  border-bottom-width: 2.5px;
  border-bottom-color: ${colors.secundary};
`;