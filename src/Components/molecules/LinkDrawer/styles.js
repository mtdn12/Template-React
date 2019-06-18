const styles = theme => ({
  linkItem: {
    color: theme.palette.common.white,
    fontWeight: 500,
    '&:hover': {
      color: theme.palette.primary.main,
      background: '#fff',
      '& > div:first-child': {
        color: theme.palette.primary.main,
      },
    },
  },
  linkActive: {
    color: theme.palette.primary.main,
    background: '#fff',
    '& > div:first-child': {
      color: theme.palette.primary.main,
    },
  },
  itemIcon: {
    color: theme.palette.common.white,
  },
})

export default styles
