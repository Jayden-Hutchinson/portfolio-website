import KeyboardManager from "./keyboardManager";

class InputSystem {
  private keyboard: KeyboardManager = new KeyboardManager();

  constructor() {
    this.update();
  }

  private update = () => {
    if (this.keyboard.keys.forward.isPressed) {
      console.log("Forward");
    }

    if (this.keyboard.keys.left.isPressed) {
      console.log("left");
    }

    if (this.keyboard.keys.right.isPressed) {
      console.log("right");
    }

    if (this.keyboard.keys.backward.isPressed) {
      console.log("backward");
    }

    requestAnimationFrame(this.update);
  };

  Move() {}
}

export default InputSystem;
