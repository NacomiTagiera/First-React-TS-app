import { Typography } from "@mui/material";

const nameStyle = {
  display: "inline",
  fontWeight: 700,
  fontSize: 22,
  fontFamily: "Courier",
} as const;

const jobStyle = {
  opacity: 0.7,
  marginLeft: 5,
} as const;

function Name(props: { myName: string; myJob: string }) {
  return (
    <>
      <Typography sx={nameStyle}>{props.myName}</Typography>
      <Typography sx={jobStyle}>{props.myJob}</Typography>
    </>
  );
}

export default Name;
