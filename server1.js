
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();





try {
    console.log(new Date());
    const data = "Hello"

    fs.writeFile(("message.txt", data)

        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => {
            console.log(err);
        })
    );
} catch (error) {
    console.error(error)
}