import HelloWorldButton from "./components/hello_world_button/hello_world_button.js";
import Heading from "./components/heading/heading.js";

// Heading component
const head = new Heading();
head.render();

const helloworld = new HelloWorldButton();
helloworld.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}

helloWorldButton.methodThatDoesNotExist();
