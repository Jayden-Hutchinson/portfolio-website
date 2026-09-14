import Key from "./key";

class KeyboardManager {
  public keys = {
    forward: new Key("KeyW"),
    left: new Key("KeyA"),
    backward: new Key("KeyS"),
    right: new Key("KeyD"),
  };

  constructor() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  private keyValues() {
    return Object.values(this.keys);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    for (const key of this.keyValues()) {
      if (key.code === event.code) {
        key.isPressed = true;
      }
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    for (const key of this.keyValues()) {
      if (key.code === event.code) {
        key.isPressed = false;
      }
    }
  };

  destroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }
}

export default KeyboardManager;
