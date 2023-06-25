import React from 'react';
import {Typography, Grid, Link, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomGridItem = styled(Grid)(({ isfirst }: { isfirst?: string }) => ({
    marginTop: isfirst === 'true' ? 0 : '10px',
}));

const BoxStatus = styled(Box)({
    padding: '0 10px',
    maxWidth: '75px',
    borderRadius: 20,
    background: '#05B63E',
});

type CustomDomainConnectedProps = {
    domain?: string;
    status: string;
    addedDate: string;
};

export const CustomDomainConnected = ({ domain, status, addedDate }: CustomDomainConnectedProps) => {
    const contentItems = [
        { label: 'Tên miền', value: <Link href={domain}>{domain}</Link> },
        { label: 'Trạng thái', value: status },
        { label: 'Ngày thêm', value: addedDate },
    ];

    return (
        <>
            {contentItems.map((item, index) => (
                <CustomGridItem container spacing={0} key={index} isfirst={(index === 0).toString()}>
                    <Grid item xs={3}>
                        <Typography fontWeight={'bold'}>{item.label}</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        {item.label === 'Trạng thái' ? (
                            <BoxStatus>
                                <Typography color={'#FFFFFF'}>{item.value}</Typography>
                            </BoxStatus>
                        ) : (
                            <Typography>{item.value}</Typography>
                        )}
                    </Grid>
                </CustomGridItem>
            ))}
        </>
    );
};
