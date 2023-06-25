import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography } from "@mui/material";
import { HourglassEmptyOutlined } from "@mui/icons-material";
import { decrement, resetCounter, Status, updateAddedDate, updateCustomDomain } from "../../store/features/customDomain";
import { RootState } from "../../store";

export const Counter = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state: RootState) => state.customDomain);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(decrement());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [dispatch]);

    useEffect(() => {
        if (counter === 0) {
            dispatch(updateCustomDomain({status: Status.Connected}))
            dispatch(updateAddedDate())
            dispatch(resetCounter())
        }
    }, [counter, dispatch])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}s`;
    };

    return (
        <Stack alignItems={'center'} direction={'row'} spacing={2} bgcolor={'#3F454D'} p={1} maxWidth={130} borderRadius={2}>
            <HourglassEmptyOutlined sx={{color: '#FFFFFF', fontSize: 30}}/>
            <Typography color={'#FFFFFF'} fontWeight={'bold'} fontSize={25}>{formatTime(counter)}</Typography>
        </Stack>
    );
};