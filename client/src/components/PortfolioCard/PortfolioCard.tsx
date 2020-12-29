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
import { useTranslate } from 'hooks';

const useStyles = makeStyles({
  cardActions: {
    justifyContent: 'flex-end',
  },
});

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
  tsCodeLink: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  tsCodeLink,
}) => {
  const classes = useStyles();

  const history = useHistory();

  const translate = useTranslate();

  const handleClickPlay = () => history.push(link);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          href={tsCodeLink}
          rel="noreferrer noopener"
          target="_blank"
        >
          {translate('viewCode')}
        </Button>
        <Button size="small" onClick={handleClickPlay}>
          {translate('play')}
        </Button>
      </CardActions>
    </Card>
  );
};
