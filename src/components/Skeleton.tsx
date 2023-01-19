import { Skeleton } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './styled';

const SkeletonLoader = () => {
  return (
    <>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} data-testid={'skeleton-id'}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <StyledTableCell component='th' scope='row'>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell>
          <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
        </StyledTableCell>
        <StyledTableCell align='right'>
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right', ml: 2 }} />
          <Skeleton variant='rounded' width={40} height={40} sx={{ float: 'right' }} />
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default SkeletonLoader;
