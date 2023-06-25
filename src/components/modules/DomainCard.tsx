import React from 'react';
import { Box, Card, CardHeader, CardContent, Typography, Divider, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    '&:last-child': {
        paddingBottom: '16px',
    },
});

const CustomGridItem = styled(Grid)(({ isfirst }: { isfirst?: string }) => ({
    marginTop: isfirst === 'true' ? 0 : '10px',
}));

const BoxStatus = styled(Box)({
    padding: '0 10px',
    maxWidth: '75px',
    borderRadius: 20,
    background: '#05B63E',
});


type DomainCardProps = {
    title: string;
    domain?: string;
    status: string;
    addedDate?: string;
};

export const DomainCard = ({ title, domain, status, addedDate }: DomainCardProps) => {
    const contentItems = [
        { label: 'Tên miền', value: <Link href={domain}>{domain}</Link> },
        { label: 'Trạng thái', value: status },
        { label: 'Ngày thêm', value: addedDate },
    ];

    return (
        <Card sx={{ width: '100%', borderRadius: 3, boxShadow: 'none' }}>
            <CardHeader title={<Typography variant="h6" fontWeight="bold">{title}</Typography>} />
            <Divider style={{ width: '100%' }} />
            <StyledCardContent>
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
            </StyledCardContent>
        </Card>
    );
};
