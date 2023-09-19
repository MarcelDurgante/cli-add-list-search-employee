import fetch from 'cross-fetch';

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

try {
    const result = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=f31a79670d602eaa6aa146bb8e632945", requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));
} catch (err) {
    console.error('Could not fetch currency data');
    throw err;
};
