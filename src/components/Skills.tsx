import { Box, Button } from "@mui/material";

function Skill(props: any) {
  return (
    <Box
      sx={{
        display: "inline-block",
        margin: 3,
      }}
    >
      <Button variant="contained" disabled>
        {props.skill}
      </Button>
    </Box>
  );
}

export default Skill;
