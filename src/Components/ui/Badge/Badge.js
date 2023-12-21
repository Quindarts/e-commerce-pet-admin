import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { green, grey, red } from '@mui/material/colors';

export function BadgeWrapper({ status, number, children }) {
 const badgeColor = status === 'online' ? green[500] : status === 'offline' ? grey[500] : red[500];
 const badgeContent = number > 99 ? '99+' : number;

 return (
  <Badge
    color="secondary"
    badgeContent={badgeContent}
    style={{
      backgroundColor: badgeColor,
      animation: status === 'online' ? 'blink 1s infinite' : 'none',
    }}
    overlap="circular"
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
  >
    {children}
  </Badge>
 );
}