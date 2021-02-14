global.sumTryCatch = async event => {
    try {
        return await event;
    } catch (error) {
        console.log(error);
        if (!error.response) {
            return error;
        }
        return error.response;
    }
};
