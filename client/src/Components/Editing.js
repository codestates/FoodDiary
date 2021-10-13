import React, { useEffect, useState, useRef } from 'react';
import './Editing.css';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import UploadColumn from './UploadColumn';
import axios from 'axios';
import EditColumn from './EditColumn';

function Edit({ articleId, friendId, loginId }) {
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleDelete = () => {
    if (friendId !== loginId) {
      alert("you can't do that");
    } else {
      console.log('come?', articleId);
      let url = 'https://localhost:4000/article/' + articleId;
      axios.delete(url);
      window.location.reload();
    }
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const editToggle = () => {
    if (friendId !== loginId) {
      alert("you can't do that");
    } else {
      setEdit((prevOpen) => !prevOpen);
    }
  };

  return (
    <>
      <div>
        <Button
          ref={anchorRef}
          id='composition-button'
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          style={{
            fontWeight: 'bold',
            fontSize: '15px',
            color: 'black',
            marginLeft: '34rem',
            marginTop: '-28px',
          }}
        >
          ...
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement='bottom-start'
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='composition-menu'
                    aria-labelledby='composition-button'
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={editToggle}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Remove</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {edit ? <EditColumn articleId={articleId} /> : <div></div>}
      </div>
    </>
  );
}

export default Edit;
