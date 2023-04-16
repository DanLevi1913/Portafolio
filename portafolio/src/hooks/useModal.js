import { useState } from "react";

export const useModal = () => {

    const [isShow, setisShow] = useState(false);


    const showModal = () => {
        setisShow(true)
    }

    const hideModal = () => {
        setisShow(false)
    }

    return { isShow, showModal, hideModal };
};
