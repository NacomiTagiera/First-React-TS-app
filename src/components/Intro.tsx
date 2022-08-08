import { Typography } from "@mui/material";

function Intro(props: { description: string }) {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 500,
          textAlign: "justify",
          pb: 3,
        }}
      >
        {props.description}
      </Typography>
    </>
  );
}

export default Intro;
