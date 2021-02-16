import { useEffect } from "react";

export default (location, history) => {
    useEffect(() => {
        if (location.pathname === "/authentication") return;
        const auth = localStorage.getItem("n-auth");

        if (auth && auth != "null") {
            const token = JSON.parse(auth);
            const exp = token.exp;
            if (Date.now() / 1000 > exp || !exp) {
                // TOKEN EXPIRED
                // console.error('Token expired!');
                localStorage.clear();
                history.push("/authentication");
            }
        } else {
            console.error("Missing token");
            history.push("/authentication");
        }
    }, [location]);

    return;
};
