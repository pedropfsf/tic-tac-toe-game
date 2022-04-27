import { Alert } from "react-native";
import { Game } from "../types/GameContextTypes";


function verifyFieldsPlayers(state: Game) {
  if(!state.playerO.name || !state.playerX.name) {
    Alert.alert('Preencha os campos', 'Campo do jogador X e jogador O estão vazios')

    return;
  }
}

export default verifyFieldsPlayers;