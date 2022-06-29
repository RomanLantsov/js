class Button {
  constructor(width, height, background, value, func) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
    this.clickEvent = func;
  }
  render() {
    let el = document.createElement("button");
    el.style.width = this.width;
    el.style.height = this.height;
    el.style.background = this.background;
    el.textContent = this.value;
    el.onclick = this._clickEvent;
    return el;
  }
  insertButtonToElement(id) {
    document
      .getElementById(id)
      .insertAdjacentElement("beforeend", this.render());
  }

  set clickEvent(func) {
    this._clickEvent = undefined;
    if (typeof func == "function") this._clickEvent = func;
  }
}

class ModernButton extends Button {
  constructor(width, height, background, value) {
    super(width, height, background, value);
  }

  insertButtonToElement(id) {
    let el = super.render();
    el.style.border = "none";
    el.style.borderTopLeftRadius = "25%";
    el.style.borderBottomRightRadius = "25%";
    el.style.color = "#7C7C7C";
    el.style.fontFamily = "Inter";
    el.style.fontWeight = 500;
    el.style.fontSize = "22px";

    document.getElementById(id).insertAdjacentElement("beforeend", el);
  }
}
