const obj = {
    js : 'javascript',
    cpp: 'c++',
    ruby: 'ruby',
    swift: 'swift'
};

for (const key in obj) {
    console.log(key + ' -> ' + obj[key])
}