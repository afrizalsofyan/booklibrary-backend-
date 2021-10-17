//digunakan untuk terhubung dengan MongoDB
const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect("mongodb://localhost:27017/db_buku", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
},
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, 'koneksi ke database gagal...'));

// db.once("open", ()=>{
//     console.log("koneksi database berhasil!!!");
// });
 (err) => {
    if (!err) {
        console.log('Koneksi MongoDB berhasil')
    } else {
        console.log('Error koneksi ke database: ' + err)
    }
});
