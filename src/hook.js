import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid"

const useFlip = () => {
    const [state, setState] = useState(true);
    const flipState = () => {
        setState(state => !state);
    };
    return [state, flipState]
}

const useAxios = (url) => {
    const [ele, setEle] = useState([]);
    const addCard = async (name = '') => {
        console.log(name)
        const response = await axios.get(
            `${url}${name}`
        );
        setEle(ele => [...ele, { ...response.data, id: uuid() }]);
    };
    return [ele, addCard]
}



export { useFlip, useAxios }

