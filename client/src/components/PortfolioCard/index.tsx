import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {},
  cardActions: {
    justifyContent: 'flex-end',
  },
});

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
}) => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => history.push(link);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" onClick={handleClick}>
          Play
        </Button>
      </CardActions>
    </Card>
  );
};
