import React from "react";
import Input from "@icgc-argo/uikit/form/Input";
import { ThemeProvider } from "@icgc-argo/uikit";
import { css } from "emotion";

// import Tree from "./samples/rc-spider";
import Tree from "./samples/react-org-chart";

function App() {
  const [val, setVal] = React.useState("");
  return (
    <ThemeProvider>
      <div>
        <header>
          <Input
            preset="search"
            value={val}
            onChange={e => setVal(e.target.value)}
          />
          <Tree searchString={val} />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
