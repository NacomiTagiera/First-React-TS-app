import { Box } from "@mui/material";
import Photo from "./Photo";
import Name from "./Name";

function Header() {
  const myName: string = "Jakub Pawlak";
  const myJob: string = "Front-end Dev";

  return (
    <Box
      sx={{
        my: 3,
        ml: 5,
      }}
    >
      <Photo />
      <Name myName={myName} myJob={myJob} />
    </Box>
  );
}

export default Header;
