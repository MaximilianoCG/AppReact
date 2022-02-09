import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CharacterCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.nickname}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {data.birthday}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.status}
        </Typography>
      </CardContent>
    </Card>
  );
}
