app.filter('friends',function () {
    return function (items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            for (key in users) {
                if (users[key].log == localStorage.getItem('log')) {
                    for (key2 in users[key].log.friends) {
                        if (item.log != users[key].log.friends[key2].log) {
                            filtered.push(item);
                        }
                    }
                }
            }
        }
        return filtered;
    };
});