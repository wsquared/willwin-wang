import React from 'react';
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  SvgIcon,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useTranslate } from 'hooks';
import { ReactComponent as TypescriptSvg } from 'icons/typescript/typescript-original.svg';
// import { ReactComponent as PythonSvg } from 'icons/python/python-original.svg';

const useStyles = makeStyles({
  cardActions: {
    justifyContent: 'flex-end',
  },
});

interface PortfolioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
  tsCodeLink: string;
  // pythonCodeLink: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  link,
  tsCodeLink,
  // pythonCodeLink,
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
          aria-label={translate('typescript')}
        >
          <SvgIcon>
            <TypescriptSvg />
          </SvgIcon>
        </Button>
        {/* <Button
          size="small"
          href={pythonCodeLink}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={translate('python')}
        >
          <SvgIcon>
            <PythonSvg />
          </SvgIcon>
        </Button> */}
        <Button size="small" onClick={handleClickPlay}>
          {translate('play')}
        </Button>
      </CardActions>
    </Card>
  );
};
