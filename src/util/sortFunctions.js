const Sort = {

    byFirstName: function(arr, bool) {
        if (bool) {
            arr.sort((a, b) => {
                if (a.name.first < b.name.first) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        } else {
            arr.sort((a, b) => {
                if (a.name.first > b.name.first) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        }
    },

    byLastName: function(arr, bool) {
        if (bool) {
            arr.sort((a, b) => {
                if (a.name.last < b.name.last) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        } else {
            arr.sort((a, b) => {
                if (a.name.last > b.name.last) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        }   
    },

    byEmail: function(arr, bool) {
        if (bool) {
            arr.sort((a, b) => {
                if (a.email < b.email) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        } else {
            arr.sort((a, b) => {
                if (a.email > b.email) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        }
    },

    byUsername: function(arr, bool) {
        if (bool) {
            arr.sort((a, b) => {
                if (a.login.username < b.login.username) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        } else {
            arr.sort((a, b) => {
                if (a.login.username > b.login.username) {
                    return 1;
                }
                else {
                    return -1
                }
            })
        }
    },
}

export default Sort;
