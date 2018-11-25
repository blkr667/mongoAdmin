import fetch from 'isomorphic-fetch';

const fetchAsync = async (url) => await (await fetch(url)).json();

const syncFetch = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
}

const authenticationHandler = {
    isAuthenticated(handleAuthCallback) {
        fetch("http://localhost:3000/authcheck")
            .then(res => res.json())
            .then(res => {
                handleAuthCallback(res.status);
            });
    },

    authenticate(handleAuthCallback, user) {
        fetch("http://localhost:3000/login",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(res => {
                handleAuthCallback(res.status);
            });
    },

    createUser(handleAuthCallback, user) {
        fetch("http://localhost:3000/register",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(res => {
                handleAuthCallback(res.status);
            });
    },

    authenticate2(handleAuthCallback) {
        fetch("http://localhost:3000/login")
            .then(res => res.json())
            .then(res => {
                handleAuthCallback(res.status);
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

export default authenticationHandler;