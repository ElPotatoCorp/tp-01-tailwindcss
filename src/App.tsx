import { Button } from "./components/button";

function App() {
  return (
    <div className="m-5">
      <Button>Primary</Button>
      <Button color="secondary" size="md">Secondary</Button>
      <Button color="white" size="md" shape="pill">White</Button>
    </div>
  );
}

export default App
