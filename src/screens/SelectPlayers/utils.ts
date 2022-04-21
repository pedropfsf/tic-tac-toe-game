import Constants from "expo-constants";

type ConstantsTypes = typeof Constants;

export class BarHeightSpaceApp {
  private _constants: ConstantsTypes;
  
  constructor(constants: ConstantsTypes) {
    this._constants = constants;
  }

  private get constants(): ConstantsTypes {
    return this._constants;
  }

  calculate(lengthBarStyle: number) {
    return this.constants.statusBarHeight + lengthBarStyle;
  }
}

/**
 * Testar essa classe para a refatoração
 */