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

  border-bottom-width: 1px;
  border-bottom-color: ${colors.secundary};
`;

export const PanelGame = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColumnGame = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

