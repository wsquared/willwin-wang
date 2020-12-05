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
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
