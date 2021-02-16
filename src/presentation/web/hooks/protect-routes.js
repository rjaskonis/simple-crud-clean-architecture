import { useEffect } from "react";

function getCookie(c_name) {
    var i,
        x,
        y,
        ARRcookies = document.cookie.split(";");

    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

export default (location, history) => {
    useEffect(() => {
        if (location.pathname === "/authentication") return;

        const cookieToken = getCookie("token");
        const auth = localStorage.getItem("n-auth");

        if (cookieToken && auth && auth != "null") {
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
