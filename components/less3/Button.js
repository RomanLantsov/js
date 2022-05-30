class Button {
  constructor(width, height, background, value) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
  }
  render() {
    let el = document.createElement("button");
    el.style.width = this.width;
    el.style.height = this.height;
    el.style.background = this.background;
    el.textContent = this.value;
    return el;
  }
  insertButtonToElement(id) {
    document
      .getElementById(id)
      .insertAdjacentElement("beforeend", this.render());
  }
}

class ModernButton extends Button {
  constructor(width, height, background, value) {
    super(width, height, background, value);
  }

  insertButtonToElement(id) {
    let el = super.render();
    el.style.border = 'none';  
    el.style.borderTopLeftRadius = '25%';  
    el.style.borderBottomRightRadius = '25%';  
    el.style.color = '#7C7C7C';  
    el.style.fontFamily = 'Inter';
    el.style.fontWeight = 500;
    el.style.fontSize = '22px';
  
    document
      .getElementById(id)
      .insertAdjacentElement("beforeend", el);
  }
}
 