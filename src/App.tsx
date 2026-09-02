import { Button } from "./components/button";
import { Heading } from "./components/heading";

function App() {
  return (
    <div className="m-5 flex flex-col gap-5">
      <div>
        <Button>Primary</Button>
        <Button color="secondary" size="md">Secondary</Button>
        <Button color="white" size="md" shape="pill">White</Button>
      </div>
      <div className="flex flex-col">
        <Heading as="h2">Heading Display</Heading>
        <Heading as="h2" size="lg">Heading LG</Heading>
        <Heading as="h2" size="md">Heading MD</Heading>
        <Heading as="h2" size="sm">Heading SM</Heading>
      </div>
    </div>
  );
}

export default App
