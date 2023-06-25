import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {resetCounter, Status, updateCustomDomain} from "../../../store/features/customDomain";

export const useCustomDomain = () => {
    const dispatch = useDispatch();
    const { domain: domainSave, status, addedDate } = useSelector((state: RootState) => state.customDomain)
    const [domain, setDomain] = useState<string | undefined>(domainSave);
    const [isValidDomain, setIsValidDomain] = useState<boolean>(true);

    const handleDomainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDomain(value);

        if (value.trim() === '') {
            setIsValidDomain(true);
        } else {
            const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
            setIsValidDomain(domainRegex.test(value));
        }
    };

    const handleSubmit = useCallback(() => {
        const data = {
            domain,
            status: Status.Confirm,
        }
        dispatch(updateCustomDomain(data))
    },[dispatch, domain])

    const handleConnect = () => {
        dispatch(updateCustomDomain({status: Status.Connecting,}))
    }

    const handleEditDomain = () => {
        dispatch(updateCustomDomain({status: Status.Default}))
        dispatch(resetCounter());
    }

    return {
        status,
        domain,
        addedDate,
        isValidDomain,
        handleSubmit,
        handleConnect,
        handleEditDomain,
        handleDomainChange,
    }
}