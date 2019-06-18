import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  wapperLogin: {
    background: '#0052D4',
    background: '-webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4)',
    background: 'linear-gradient(to right, #6FB1FC, #4364F7, #0052D4)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overPrimary: {
    transition: 'all .5s ease',
    cursor: 'pointer',
    width: 300,
    padding: '.6em',
    background: 'rgb(224, 65, 65)',
    border: 'none',
    borderRadius: 8,
    ' & span': {
      color: '#fff',
      fontWeight: 700,
    },
    '&:hover': {
      background: 'rgb(173, 15, 15)',
    },
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  subTitle: {
    color: '#fff',
    marginBottom: 32,
    textTransform: 'uppercase',
  },
  info: {
    marginTop: 16,
    color: '#fff',
    '& a': {
      color: '#fff',
      fontWeight: 700,
    },
  },
})

export default useStyles
