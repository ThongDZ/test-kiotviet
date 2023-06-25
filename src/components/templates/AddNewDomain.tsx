import React from "react";
import {Link, Stack, Typography} from "@mui/material";
import {DomainCard} from "../modules/DomainCard";
import {formatDate} from "../../utils/formatDate";
import {CustomDomain} from "../modules/CustomDomain";

export const AddNewDomain = () => {
    return (
        <Stack spacing={3} width={560} margin={'auto'}>
            <Stack alignItems={'flex-start'}>
                <Typography variant="h5" fontWeight={'bold'} mb={0.5}>Tên miền</Typography>
                <Typography>Tăng khả năng hiển thị trang webside của bạn</Typography>
                <Typography>Bạn có thể <Link href={'#'}>xem hướng dẫn tại đây</Link></Typography>
            </Stack>

            <DomainCard
                title={'Tên miền mặc định'}
                domain={'cuahangxxx.kiotvietweb.com'}
                status={'Đã kết nối'}
                addedDate={formatDate('16:52:45 27/03/2023')}
            />
            <CustomDomain/>
        </Stack>
    )
}