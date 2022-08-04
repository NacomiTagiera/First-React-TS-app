import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

function DetailsItem(props: { icon: ReactNode; text: string }) {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography>{props.icon}</Typography>
      <Typography>{props.text}</Typography>
    </Box>
  );
}

export default DetailsItem;
