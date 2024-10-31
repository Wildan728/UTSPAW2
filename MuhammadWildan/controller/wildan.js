
const Pariwisata = require("../model/pariwisata")
const createdPariwisata = (req, res) => {
  const pariwisata = new Pariwisata({
    namaPariwisata : req.body.namaPariwisata,
    lokasi : req.body.lokasi
  });

  console.log(pariwisata);
  pariwisata.save().then((createdPariwisata)=>{
    res.status(201).json({
      message: "Data Berhasil Disimpan",
      pariwisataId : createdPariwisata._id
    });
  })
  .catch((err)=>{
    res.status(500).json({
        message: "internal server error!"
    });
  });
};

module.exports = {createdPariwisata}