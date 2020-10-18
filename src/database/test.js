const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // put data in the table
  await saveOrphanage(db, {
    lat: -13.8690946,
    lng: -40.0961486,
    name: "Lar dos meninos",
    about: "Presta assistência a crianças de 06 a 15 anos",
    whatsapp: "981030303",
    images: [
      "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha com muita paciência e amor para dar",
    opening_hours: "Horário de visitas das 8h as 18h",
    open_on_weekeds: "0",
  });

  // query data of table
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages);

  // query only 1 orphanage by id
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  //console.log(orphanage);

  // delete data of the table
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
  //console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
});
