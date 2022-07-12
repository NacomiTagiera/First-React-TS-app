import React from 'react';
import Button from '@mui/material/Button';

function Toggle(props: { label: string, backgroundColor: string, size: string }) {
  let scale = 1;
  if (props.size === "sm") scale = 0.75;
  if (props.size === "lg") scale = 1.5;
  const style = {
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  }
  return (
    <Button variant="contained" style={style} sx={{
      position: 'absolute',
      left: 350,
      top: 420,
    }}>{props.label}</Button>    

  );
}

export default Toggle;