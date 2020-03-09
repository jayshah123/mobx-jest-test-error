import {observable, action} from 'mobx';

export default class ColorStore {
  @observable color = 'yellow';

  @action
  setColor(color) {
    this.color = color;
  }
}
