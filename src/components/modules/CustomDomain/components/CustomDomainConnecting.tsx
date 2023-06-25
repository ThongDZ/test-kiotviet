import React from "react";
import {
    Box,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Counter} from "../../../elements/Counter";

const CustomGridItem = styled(Grid)(() => ({
    marginTop: '10px',
}));

const StyledTableContainer = styled(TableContainer)(() => ({
    border: '1px solid #e0e0e0',
    borderRadius: 15,
}));

const StyledHeaderCell = styled(TableCell)(() => ({
    borderRight: '1px solid #e0e0e0',
}));

const CustomTableCell = styled(StyledHeaderCell)(() => ({
    borderBottom: 'none',
}));

const BoxStatus = styled(Box)({
    padding: '0 10px',
    borderRadius: 20,
    background: '#FF9902',

});

type CustomDomainConnectProps = {
    domain?: string;
    currentIP: string;
}

export const CustomDomainConnecting = ({domain, currentIP}: CustomDomainConnectProps) => (
    <Stack spacing={2.5}>
        <Grid item xs={3}>
            <Counter/>
        </Grid>
        <CustomGridItem container spacing={0}>
            <Grid item xs={3}>
                <Typography fontWeight={'bold'}>Tên miền</Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography>{domain}</Typography>
            </Grid>
        </CustomGridItem>
        <CustomGridItem container spacing={0}>
            <Grid item xs={3}>
                <Typography fontWeight={'bold'}>Trạng thái</Typography>
            </Grid>
            <Grid item xs={9}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <BoxStatus>
                        <Typography color={'#FFFFFF'}>Hệ thống đang kết nối</Typography>
                    </BoxStatus>
                </Stack>
            </Grid>
        </CustomGridItem>
        <CustomGridItem container spacing={0}>
            <Grid item xs={12} mb={1}>
                <Typography fontWeight={'bold'}>IP KiotVietWeb:</Typography>
            </Grid>
            <Grid item xs={12}>
                <StyledTableContainer>
                    <Table aria-label="ip table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#F7F8F9', height: 60 }}>
                                <StyledHeaderCell>Host</StyledHeaderCell>
                                <StyledHeaderCell>Loại</StyledHeaderCell>
                                <TableCell>Giá trị</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <CustomTableCell>@</CustomTableCell>
                                <CustomTableCell>A</CustomTableCell>
                                <TableCell>{currentIP}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </Grid>
        </CustomGridItem>
        <CustomGridItem container spacing={0}>
            <Grid item xs={12}>
                <Box border={'2px solid #FFD392'} borderRadius={3} bgcolor={'#FFF5E5'} p={1}>
                    <Typography display={'inline'} fontSize={15} component="div">
                        Hệ thống đang thiết lập tên miền. bạn có thể truy cập tên miền sau
                        <Typography component={'span'} fontWeight={'bold'}> 10phút</Typography>,
                        nếu không được vui lòng liên hệ hotline
                        <Typography component={'span'} fontWeight={'bold'}> 1900 6522 </Typography>
                        để được hỗ trợ
                    </Typography>
                </Box>
            </Grid>
        </CustomGridItem>
    </Stack>
)