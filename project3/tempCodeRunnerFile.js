.then(() => readFile('data.json'))
    .then(data => console.log('data with promise using callback', data))