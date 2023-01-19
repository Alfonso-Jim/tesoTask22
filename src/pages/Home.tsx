import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';
import { clearPasswordErrors, clearUserErrors, login } from '../features/home/homeSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { TextField, Icon } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import HomeSvg from '../components/HomeSvg';
import { TemporaryDrawer } from '../components/TemporaryDrawer';

const Home: FunctionComponent = () => {
  const [username, setuserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const userNameError = useAppSelector((state: RootState) => state.homeSlice.userNameError);
  const userNameHelper = useAppSelector((state: RootState) => state.homeSlice.userNameHelper);
  const passwordError = useAppSelector((state: RootState) => state.homeSlice.passwordError);
  const passwordHelper = useAppSelector((state: RootState) => state.homeSlice.passwordHelper);
  const status = useAppSelector((state: RootState) => state.homeSlice.status);
  const redirect = useAppSelector((state: RootState) => state.homeSlice.redirect);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    window.open('https://nordlocker.com/');
  }, []);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserName(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (redirect) {
      navigate('/datatable');
    }
  }, [redirect]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}>
          <div className={styles.left}>
            <img className={styles.logoIcon} alt='' src='../logo.svg' />
          </div>
          <div className={styles.right}>
            <div className={styles.desktop}>
              <button className={styles.home1} onClick={onHomeClick}>
                <div className={styles.spacingComponentNordUi} />
                <div className={styles.home2}>Home</div>
                <div className={styles.spacingComponentNordUi} />
              </button>
            </div>
            <button className={styles.small}>
              <div className={styles.spacingComponentNordUi} />
              <TemporaryDrawer isHome={true} />
              <div className={styles.spacingComponentNordUi} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.border}>
            <div className={styles.container}>
              <div className={styles.svg}>
                <div className={styles.dataStorageIsometric1}>
                  <HomeSvg />
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.logIn} data-testid={'login-text'}>
                  Log in
                </div>
              </div>
              <form onSubmit={handleSubmit} id='logIn' data-testid={'form-submit'}>
                <div className={styles.fields}>
                  <TextField
                    className={styles.inputoutlined}
                    data-testid={'username-field'}
                    error={userNameError}
                    helperText={userNameHelper}
                    fullWidth
                    color='primary'
                    variant='outlined'
                    type='text'
                    label='User name'
                    placeholder='Type user name'
                    size='medium'
                    margin='none'
                    value={username}
                    onChange={handleUserNameChange}
                    onFocus={() => dispatch(clearUserErrors())}
                    required
                  />
                  <TextField
                    className={styles.inputoutlined}
                    data-testid={'password-field'}
                    error={passwordError}
                    helperText={passwordHelper}
                    fullWidth
                    color='primary'
                    variant='outlined'
                    type='password'
                    label='Password'
                    placeholder='Type password'
                    size='medium'
                    margin='none'
                    value={password}
                    onChange={handlePasswordChange}
                    onFocus={() => dispatch(clearPasswordErrors())}
                    required
                  />
                </div>
              </form>
              <div className={styles.btn}>
                <LoadingButton
                  variant='contained'
                  type='submit'
                  form='logIn'
                  color='primary'
                  size='large'
                  disableElevation
                  endIcon={<Icon>arrow_forward_sharp</Icon>}
                  loading={status === 'isLoading'}
                  loadingPosition='end'
                  data-testid={'login-btn'}
                >
                  Log in
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
