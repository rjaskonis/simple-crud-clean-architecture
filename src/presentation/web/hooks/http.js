import { useState } from "react";

export default (request, setData, options = {}) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [response, setResponse] = useState(null);

    const run = async (...args) => {
        try {
            setIsProcessing(true);
            const response = await request(...args);
            setResponse(response);
            if (setData) setData(options.isParsed ? response : response.data);
            return response;
        } catch (error) {
            console.error(error);
            setResponse(error);
        } finally {
            setIsProcessing(false);
        }
    };

    return [{ isProcessing, response }, run];
};
