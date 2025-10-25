import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown, faLink } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEMS } from '@/constants'
import { menuItemClick, actionItemClick } from '@/slice/menuSlice'
import cx from 'classnames'
import { socket } from "@/socket";
import { useEffect, useState } from 'react'

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const [showToast, setShowToast] = useState(false);

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
    socket.emit('menuClick', itemName);
  }

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  }

  const handleCopyRoomLink = () => {
    if (showToast) return; // Prevent spam clicking
    
    const roomLink = window.location.href;
    navigator.clipboard.writeText(roomLink).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  }

  // Socket code for menu active items
  useEffect(() => {
    const handleMenuClickSocket = (itemName) => {
      dispatch(menuItemClick(itemName));
    }
    socket.on('menuClick', handleMenuClickSocket);
    return () => {
      socket.off('menuClick', handleMenuClickSocket);
    }
  }, [activeMenuItem]);

  return (
    <>
      <div className={styles.menuContainer}>
        <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL })} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>
        <div className={cx(styles.iconWrapper, { [styles.active]: activeMenuItem === MENU_ITEMS.ERASER })} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
          <FontAwesomeIcon icon={faEraser} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper} 
             onClick={(e) => { e.preventDefault(); handleActionItemClick(MENU_ITEMS.UNDO); }}
             onMouseDown={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper} 
             onClick={(e) => { e.preventDefault(); handleActionItemClick(MENU_ITEMS.REDO); }}
             onMouseDown={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper} onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}>
          <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper} onClick={handleCopyRoomLink} title="Copy Room Link">
          <FontAwesomeIcon icon={faLink} className={styles.icon} />
        </div>
      </div>
      
      {showToast && (
        <div className={styles.toast}>
          ✓ Room link copied!
        </div>
      )}
    </>
  )
}

export default Menu