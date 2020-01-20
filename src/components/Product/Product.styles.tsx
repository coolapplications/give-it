import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    maxWidth: 224,
    height: 400
  },
  media: {
    height: 224,
    width: 224
  },
  notOverflow: {
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
});
