import React from "react";
import {
    Box,
    Button,
    Grid,
    Link,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { CheckCircleRounded, WarningAmberRounded } from "@mui/icons-material";

const CustomGridItem = styled(Grid)(({ isfirst }: { isfirst?: string }) => ({
    marginTop: isfirst === 'true' ? 0 : '10px',
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

const StyledButton = styled(Button)({
    textTransform: 'none',
    borderRadius: 5,
    width: 100,
});

type CustomDomainConfirmProps = {
    domain?: string;
    currentIP: string;
    onConnect: () => void;
}

export const CustomDomainConfirm = ({ domain, currentIP, onConnect }: CustomDomainConfirmProps) => (
    <Stack spacing={2.5}>
        <CustomGridItem container spacing={0} isfirst={'true'}>
            <Grid item xs={3}>
                <Typography fontWeight={'bold'}>Tên miền</Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography>{domain}</Typography>
            </Grid>
        </CustomGridItem>
        <CustomGridItem container spacing={0}>
            <Grid item xs={3}>
                <Typography fontWeight={'bold'}>IP hiện tại</Typography>
            </Grid>
            <Grid item xs={9}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography>{currentIP}</Typography>
                    <CheckCircleRounded sx={{ fontSize: 20, color: 'green' }} />
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
                    <Stack direction='row' spacing={1}>
                        <WarningAmberRounded sx={{ fontSize: 25, color: '#FFD392' }} />
                        <Stack spacing={2}>
                            <Typography fontWeight="bold" component="div">
                                Lưu ý:&nbsp;
                                <Typography component="span" display="inline" fontSize={15}>
                                    Nhập đúng địa chỉ IP KVWEB sang nhà cung cấp. Thời gian kết nối IP sẽ tuỳ thuộc vào nhà cung cấp (Khoảng 2-5 tiếng)
                                </Typography>
                            </Typography>
                            <Stack spacing={0.1}>
                                <Typography fontWeight="bold">
                                    Hướng dẫn chi tiết từ nhà cung cấp:
                                </Typography>
                                <ul>
                                    <li>
                                        <Typography component="span" variant="body1">
                                            matbao.vn&nbsp;<Link href={'#'}>xem chi tiết</Link>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component="span" variant="body1">
                                            cloudflare&nbsp;<Link href={'#'}>xem chi tiết</Link>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component="span" variant="body1">
                                            pavietnam&nbsp;<Link href={'#'}>xem chi tiết</Link>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component="span" variant="body1">
                                            Nhà cung cấp khác&nbsp;<Link href={'#'}>xem chi tiết</Link>
                                        </Typography>
                                    </li>
                                </ul>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>
        </CustomGridItem>
        <Stack alignItems="flex-end">
            <StyledButton onClick={onConnect} variant="contained">Kết nối</StyledButton>
        </Stack>
    </Stack>
);