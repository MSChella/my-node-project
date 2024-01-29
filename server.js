const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to create a text file with current timestamp
app.post('/create-file', (req, res) => {
    const timestamp = new Date().toISOString().replace(/:/g, '-'); // Format timestamp for filename
    const fileName = `${timestamp}.txt`;

    const filePath = path.join(__dirname, 'files', fileName);

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error creating file.');
        }

        res.send('File created successfully.');
    });
});

// Endpoint to retrieve all text files in the folder
app.get('/get-files', (req, res) => {
    const folderPath = path.join(__dirname, 'files');

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error retrieving files.');
        }

        res.json({ files });


    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();


// try {

//     console.log(new Date());
//     const data = "Hello"
//     fs.writeFile("message.txt", data, function (err) {
//         if (err) {
//             console.log(err);
//         }
//         console.log("sucess");
//     })
//     console.log("write file sucess");
// } catch (error) {
//     console.error(error)
// }

// const data = "Hello"

