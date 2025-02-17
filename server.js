const express = require("express");
const mysql = require("mysql")
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3306,
        password: "Hengersor35",
        database: "teliolimpia"
    }
)


app.get("/", (req, res) => {

    res.send("A szerver működik!")
}

)
app.get("/v", (req, res) => {
    const sql = "SELECT * FROM versenyzok";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }

    )
}
)
app.get("/v3", (req, res) => {
    const sql = "SELECT * FROM teliolimpia.versenyzok where  ID = 3";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }

    )
}
)

app.post("/vuj", (req, res) => {
    const sql = "INSERT INTO `teliolimpia`.`versenyzok` (`ID`, `versenyzo`) VALUES ('9', 'lklkj')";
    const values = [req.body.ID, req.body.versenyzo];
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({error: "Hibás adatbázis művelet!"});
        return res.json(result);
    }

    )
}   
)




app.listen(3000, () => {
    console.log('A szerver a 3000 porton fut!')
})
