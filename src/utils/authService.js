import fetch from 'isomorphic-fetch';

const authService = {
    login(handleAuthCallback, errorCallback, user) {
        fetch("http://localhost:3000/login",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.status === 200)
                    return res.json();
                errorCallback(res.status + ": " + res.statusText)
            }).then(
                res => {handleAuthCallback(res.status)}
            ).catch( err => {
                console.log("catch: " + err);
            });
    },
    logout(handleAuthCallback) {
        fetch("http://localhost:3000/logout")
            .then(res => res.json())
            .then(res => {
                handleAuthCallback(res.status);
            });
    }
};

export default authService;