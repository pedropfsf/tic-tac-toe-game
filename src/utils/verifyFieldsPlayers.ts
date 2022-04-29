import { Alert } from "react-native";
import { Game } from "../types/GameContextTypes";


function verifyFieldsPlayers(state: Game): boolean {
  if(!state.playerO.name || !state.playerX.name) {
    Alert.alert('Preencha os campos', 'Campo do jogador X e jogador O estão vazios')

    return false;
  }

  return true;
}

export default verifyFieldsPlayers;