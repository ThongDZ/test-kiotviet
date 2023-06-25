import React from 'react';
import {Card, CardHeader, Divider, Typography, CardContent, styled, Button} from '@mui/material';
import {Status} from "../../../store/features/customDomain";
import {CustomDomainForm} from "./components/CustomDomainForm";
import {CustomDomainConfirm} from "./components/CustomDomainConfirm";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {CustomDomainConnecting} from "./components/CustomDomainConnecting";
import {CustomDomainConnected} from "./components/CustomDomainConnected";
import {Menu} from "../../elements/Menu";
import {formatDate} from "../../../utils/formatDate";
import {useCustomDomain} from "./CustomDomain.hooks";

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    gap: '10px',
    '&:last-child': {
        paddingBottom: '16px',
    },
});

const StyledButton = styled(Button)({
    backgroundColor: '#E5F1FE',
    color: '#4E9CF8',
    boxShadow: 'none',
    textTransform: 'none',
    fontWeight: 'bold',
    gap: '8px'
});


export const CustomDomain = () => {
    const {
        domain,
        status,
        addedDate,
        isValidDomain,
        handleSubmit,
        handleConnect,
        handleEditDomain,
        handleDomainChange
    } = useCustomDomain()

    const renderContent = (): React.ReactNode => {
        switch (status) {
            case Status.Confirm:
                return <CustomDomainConfirm
                    domain={domain}
                    currentIP={'123.456.789'}
                    onConnect={handleConnect}
                />
            case Status.Connecting:
                return <CustomDomainConnecting
                    domain={domain}
                    currentIP={'123.456.789'}
                />
            case Status.Connected:
                return <CustomDomainConnected
                    domain={domain}
                    status={'Đã kết nối'}
                    addedDate={formatDate(addedDate)}
                />
            default:
                return <CustomDomainForm
                    domain={domain}
                    isValidDomain={isValidDomain}
                    onDomainChange={handleDomainChange}
                    onSaveDomain={handleSubmit}
                />;
        }
    }

    const renderButtonHeader = () => {
        switch (status) {
            case Status.Confirm:
                return <StyledButton
                    variant="contained"
                    onClick={handleEditDomain}
                >
                    <BorderColorIcon sx={{ fontSize: 20 }}/>
                    Thay đổi tên miền
                </StyledButton>
            case Status.Connecting:
                return <StyledButton
                    variant="contained"
                    onClick={handleEditDomain}
                >
                    <BorderColorIcon sx={{ fontSize: 20 }}/>
                    Thay đổi tên miền
                </StyledButton>
            case Status.Connected:
                return <Menu onClickMenuItem={handleEditDomain}/>
            default:
                return undefined
        }
    }

    return (
        <Card sx={{ width: '100%', borderRadius: 3, boxShadow: 'none' }}>
            <CardHeader
                title={<Typography variant="h6" fontWeight="bold">{status === Status.Connected ? 'Tên miền hiện tại' : 'Tên miền tuỳ chỉnh'}</Typography>}
                action={renderButtonHeader()}
            />
            <Divider style={{ width: '100%' }} />
            <StyledCardContent>
                {renderContent()}
            </StyledCardContent>
        </Card>
    );
};
