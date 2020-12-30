import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '95%',
    },
    [theme.breakpoints.down('md')]: {
      height: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '80%',
    },
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
    [theme.breakpoints.down('xs')]: {
      width: '200px',
      height: '200px',
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
