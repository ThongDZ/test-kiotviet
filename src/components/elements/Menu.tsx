import React, { useState } from 'react';
import { Menu as MenuMaterial, MenuItem, IconButton } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';

type MenuProps = {
    onClickMenuItem: () => void;
}

export const Menu: React.FC<MenuProps> = ({onClickMenuItem}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Mở menu
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Đóng menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreHoriz fontSize={'small'} />
            </IconButton>
            <MenuMaterial
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={onClickMenuItem}>Huỷ kết nối</MenuItem>
            </MenuMaterial>
        </div>
    );
};