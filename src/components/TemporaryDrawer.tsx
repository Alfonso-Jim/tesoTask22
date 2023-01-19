import React, { FC, useCallback } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import { clearRedirection } from '../features/home/homeSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';

interface Props {
  isHome: boolean;
}

type Anchor = 'right';

export const TemporaryDrawer: FC<Props> = ({ isHome }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onLogOutClick = useCallback(() => {
    dispatch(clearRedirection());
    navigate('/');
  }, [navigate]);

  const list = (anchor: Anchor) => (
    <Box
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: 250, background: '#000', color: '#fff', height: '100vh' }}
    >
      <List>
        <ListItem key={0} disablePadding>
          <ListItemButton>
            <img style={{ position: 'relative', width: '120.66px', height: '16.08px', flexShrink: '0', marginLeft: '8px' }} alt='' src='../logo.svg' />
          </ListItemButton>
        </ListItem>
        {isHome ? (
          <>
            <ListItem key={1}>
              <ListItemButton LinkComponent={'a'} href={'https://nordlocker.com/'}>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={2}>
              <ListItemButton>
                <ListItemText primary={'Log in'} />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem key={3}>
            <ListItemButton onClick={onLogOutClick}>
              <ListItemText primary={'Log out'} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Box aria-label='menu' onClick={toggleDrawer(anchor, true)} data-testid={'drawer'}>
            <img style={{ position: 'relative', width: '24px', height: '24px', flexShrink: '0' }} alt='' src='../24actionhamburger24.svg' />
          </Box>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
