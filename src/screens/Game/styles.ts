import styled from "styled-components/native";

import calculateDistanceBarHeight from "../../utils/calculateDistanceBarHeight";
import colors from "../../styles/colors";

export const AreaScreen = styled.View`
  flex: 1;
  justify-content: space-between;
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
  flex: 5;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
`;

export const ColumnGame = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  padding: 24px;
`;
