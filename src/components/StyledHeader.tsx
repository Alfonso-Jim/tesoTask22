import { FC } from 'react';
import styles from '../pages/Home.module.css';

interface Props {
  openLoginDrawer?: () => void;
  onHomeClick?: () => void;
  onLogOutClick?: () => void;
  openLogoutDrawer?: () => void;
  dataTablePage?: boolean;
}

const StyledHeader: FC<Props> = ({ openLoginDrawer, onHomeClick, onLogOutClick, openLogoutDrawer, dataTablePage }) => {
  return (
    <>
      <div className={styles.header} data-testid={'header'}>
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
          <button className={styles.small} onClick={openLoginDrawer}>
            <div className={styles.spacingComponentNordUi} />
            <img className={styles.menuIcon} alt='' src='../24actionhamburger24.svg' />
            <div className={styles.spacingComponentNordUi} />
          </button>
        </div>
      </div>
    </>
  );
};

export default StyledHeader;
