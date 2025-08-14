import "./hello_world_button.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Hello world";
    button.onclick = function () {
      const word = document.createElement("p");
      word.innerHTML = "Hello world";
      word.classList.add("hello_world_test");
      body.appendChild(word);
    };
    button.classList.add(this.buttonCssClass);
    body.appendChild(button);
  }
}

export default HelloWorldButton;
