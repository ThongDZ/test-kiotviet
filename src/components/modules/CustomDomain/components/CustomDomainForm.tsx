import {Button, FormControl, FormHelperText, InputAdornment, Stack, styled, TextField} from "@mui/material";
import {CheckCircleRounded, ErrorRounded} from "@mui/icons-material";
import React from "react";

const StyledButton = styled(Button)({
    textTransform: 'none',
    borderRadius: 5,
    width: 100,
});

type CustomDomainFormProps = {
    isValidDomain: boolean;
    domain?: string;
    onDomainChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSaveDomain: () => void;
}

export const CustomDomainForm = ({domain, isValidDomain, onDomainChange, onSaveDomain}: CustomDomainFormProps) => {
    return (
        <>
            <FormControl fullWidth error={!isValidDomain}>
                <TextField
                    error={!isValidDomain}
                    id="domain"
                    label="Nhập tên miền của bạn"
                    onChange={onDomainChange}
                    value={domain}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {domain?.trim() !== '' && (
                                    isValidDomain ? <CheckCircleRounded sx={{ color: 'green' }} /> : <ErrorRounded sx={{ color: 'red' }} />
                                )}
                            </InputAdornment>
                        ),
                    }}
                />
                {domain?.trim() !== '' && (
                    <FormHelperText sx={{ ml: 2, pt: 0.5 }} error={!isValidDomain}>
                        {isValidDomain ? 'Tên miền hợp lệ' : 'Tên miền không đúng định dạng'}
                    </FormHelperText>
                )}
            </FormControl>
            <Stack alignItems="flex-end">
                <StyledButton onClick={onSaveDomain} variant="contained" disabled={!domain || !isValidDomain}>Tiếp tục</StyledButton>
            </Stack>
        </>
    )
}