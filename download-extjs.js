const https = require('https');
const fs = require('fs');
const path = require('path');
const extract = require('extract-zip');

// Создаем директорию для ExtJS если её нет
const extDir = path.join(__dirname, 'ext');
if (!fs.existsSync(extDir)) {
    fs.mkdirSync(extDir);
}

// URL для загрузки ExtJS 6.0.0
const extjsUrl = 'https://cdn.sencha.com/ext/gpl/ext-6.0.0-gpl.zip';
const zipFile = path.join(__dirname, 'ext-6.0.0.zip');

// Загружаем архив
const file = fs.createWriteStream(zipFile);
https.get(extjsUrl, (response) => {
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('ExtJS downloaded successfully');
        
        // Распаковываем архив
        extract(zipFile, { dir: extDir })
            .then(() => {
                console.log('ExtJS extracted successfully');
                // Удаляем zip файл
                fs.unlinkSync(zipFile);
            })
            .catch(err => console.error('Error extracting:', err));
    });
}).on('error', (err) => {
    fs.unlinkSync(zipFile);
    console.error('Error downloading:', err);
});
