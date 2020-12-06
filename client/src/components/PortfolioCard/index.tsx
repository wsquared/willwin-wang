import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      minWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '100%',
    },
  },
}));

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
  );
};
