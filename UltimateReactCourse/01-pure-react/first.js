function App() {
  // const time = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return React.createElement("header", null, `Hello React! it's ${time}`);
}

const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(React.createElement(App));
