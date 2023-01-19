import { TableContainer, Paper, Table, TableHead, TableBody, IconButton, AppBar, Badge, Box, Toolbar, Typography, Stack } from '@mui/material';
import { StyledSwitch, StyledTableCell, StyledTableRow } from '../components/styled';
import { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { TemporaryDrawer } from '../components/TemporaryDrawer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearRedirection } from '../features/home/homeSlice';
import { getServers } from '../features/tableSlice/tableSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import MoreIcon from '@mui/icons-material/MoreVert';
import SkeletonLoader from '../components/Skeleton';
import styles from './TablePage.module.css';

const TablePage: FunctionComponent = () => {
  const [dense, setDense] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  const data = useAppSelector((state: RootState) => state.tableSlice.data);
  const status = useAppSelector((state: RootState) => state.tableSlice.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogOutClick = useCallback(() => {
    dispatch(clearRedirection());
    navigate('/');
  }, [navigate]);

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  useEffect(() => {
    dispatch(getServers(String(token)));
  }, []);

  return (
    <>
      <div className={styles.tablepage}>
        <div className={styles.header}>
          <div className={styles.left}>
            <img className={styles.logoIcon} alt='' src='../logo.svg' />
          </div>
          <div className={styles.right}>
            <div className={styles.desktop}>
              <button className={styles.logOut} onClick={onLogOutClick} data-testid={'logout-btn'}>
                <div className={styles.spacingComponentNordUi} />
                <div className={styles.logOut1}>Log out</div>
                <div className={styles.spacingComponentNordUi} />
              </button>
            </div>
            <button className={styles.small}>
              <div className={styles.spacingComponentNordUi} />
              <TemporaryDrawer isHome={false} />
              <div className={styles.spacingComponentNordUi} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.border}>
            <div className={styles.container}>
              <Box sx={{ flexGrow: 1, width: '100%' }}>
                <AppBar position='static' sx={{ borderRadius: 1 }} data-testid={'app-bar'}>
                  <Toolbar>
                    <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
                      Data Table
                    </Typography>
                    <Stack direction='row' spacing={1} alignItems='center' sx={{ ml: 2 }}>
                      <StyledSwitch checked={dense} onChange={handleChangeDense} />
                      <Typography>Alt view</Typography>
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                      <IconButton size='large' aria-label='show 17 new notifications' color='inherit'>
                        <Badge color='error'>
                          <AddIcon />
                        </Badge>
                      </IconButton>
                      <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
                        <Badge badgeContent={4} color='error'>
                          <FiberNewIcon />
                        </Badge>
                      </IconButton>
                      <IconButton size='large' edge='end' color='inherit'>
                        <SettingsIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                      <IconButton size='large' aria-label='show more' aria-haspopup='true' color='inherit'>
                        <MoreIcon />
                      </IconButton>
                    </Box>
                  </Toolbar>
                </AppBar>
              </Box>
              <TableContainer component={Paper} sx={{ maxHeight: '65vh', mt: 1 }} data-testid={'data-table'}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table' size={dense ? 'small' : 'medium'}>
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Distance</StyledTableCell>
                      <StyledTableCell align='right'>Name</StyledTableCell>
                      <StyledTableCell align='right'>Action</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {status === 'isLoading' ? (
                      <>
                        <SkeletonLoader />
                      </>
                    ) : status === 'data' ? (
                      <>
                        {data.map((row, index) => (
                          <StyledTableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            style={{
                              height: dense ? 8 : 53,
                            }}
                          >
                            <StyledTableCell component='th' scope='row'>
                              {row.distance}
                            </StyledTableCell>
                            <StyledTableCell align='right'>{row.name}</StyledTableCell>
                            <StyledTableCell align='right'>
                              <IconButton aria-label='delete' color='error'>
                                <DeleteIcon />
                              </IconButton>
                              <IconButton aria-label='delete' color='primary'>
                                <EditIcon />
                              </IconButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </>
                    ) : status === 'error' ? (
                      <>
                        <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <StyledTableCell colSpan={3} rowSpan={3} align='center'>
                            <Typography variant='h4'>👾Error while fetching data. Please try again later💻</Typography>
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ) : null}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePage;
