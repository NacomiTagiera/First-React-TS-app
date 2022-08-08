import { Paper } from "@mui/material";
import Header from "./components/Header";
import Info from "./components/Info";
import Skill from "./components/Skills";
import Toggle from "./components/Toggle";

function App() {
  const skills: string[] = ["react.js", "bootstrap"];

  return (
    <Paper
      sx={{
        position: "relative",
        width: 500,
        height: 500,
        boxShadow: 4,
        borderRadius: 3,
      }}
      variant="outlined"
    >
      <Toggle label="preview" backgroundColor="red" size="sm" />
      <Header />
      <Info />
      <Skill skill={skills[0]} />
      <Skill skill={skills[1]} />
    </Paper>
  );
}

export default App;
