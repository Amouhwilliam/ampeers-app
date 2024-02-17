function updaterFunc(args) {
    function transformValue(data) {
        if (typeof data === 'number') {
            return data + 1;
        } else if (typeof data === 'string') {
            return data + ' AE';
        } else if (Array.isArray(data)) {
            return data.map(transformValue);
        } else if (typeof data === 'object' && data !== null) {
            return updaterFunc(data);
        } else {
            return data;
        }
    }

    const updatedData = {};
    for (const key in args) {
        if (args.hasOwnProperty(key)) {
            updatedData[key] = transformValue(args[key]);
        }
    }

    return updatedData;
}

const result = updaterFunc({
    data: {
        element1: 0,
        element2: {
            subElement: 'It works!'
        }
    }
});
console.log(result);