import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    boxSizing: 'border-box',
    background: '#f5f5f5',
    paddingBottom: 30,
  },
  contentWrapper: {
    // padding: 16,
    height: 'calc(100% - 64px)',
    marginTop: 64,
    position: 'relative',
  },
})

export default useStyles
