import fetch from 'isomorphic-fetch';

const usersService = {
    fetchUsers(cb) {
        fetch("http://localhost:3000/users")
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    fetchUser(id, cb) {
        fetch("http://localhost:3000/users/" + id )
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    createUser(user, cb) {
        fetch("http://localhost:3000/users",
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
                cb(res);
            });
    },
    deleteUser(id, cb) {
        fetch("http://localhost:3000/users/" + id,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    },
    editUser(user, cb) {
        fetch("http://localhost:3000/users/" + user._id,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(res => {
                cb(res);
            });
    }
};

export default usersService;