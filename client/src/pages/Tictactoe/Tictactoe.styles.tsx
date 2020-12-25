import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  gameBoard: {
    [theme.breakpoints.up('lg')]: {
      width: '800px',
      height: '800px',
    },
    [theme.breakpoints.only('md')]: {
      width: '600px',
      height: '600px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '300px',
      height: '300px',
    },
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  box: {
    border: '1px solid #555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
