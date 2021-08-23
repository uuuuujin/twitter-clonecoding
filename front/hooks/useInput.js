import React, { useState, useCallback} from 'react';

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    // 두번째 자리는 setValue대신 커스텀 훅으로 handler을 보냄. 
    return [value, handler];
}