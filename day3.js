const express = require("express");
const app = express();

var mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/mongo";
const empModel = mongoose.model('employees', empSchema)
var dbConnected;

mongoose.connect(url, (err, db) => {
    if (err)
        console.log(err);
    console.log("Connction Established");
});

const empSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: Number,
    yearGrad: Number,
    gradStream: String
})
module.exports = { empSchema };
app.get("/insertOne", function (req, res) {
    const employee1 = new empModel({
        "firstName": "John",
        "lastName": "Doe",
        "salary": 25000,
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": 10000,
        "overallExp": 2,
        "contactInfo": 1234567890,
        "yearGrad": 2016,
        "gradStream": "CSE"
    });

    employee1.save((err, result) => {
        if (err)
            console.log(err);
        else {
            res.json(result);
        }
    });
});

app.get("/insertMany", function (req, res) {
    const employee2 = new empModel({
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": 30000,
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 1,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee3 = new empModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 20000,
        "overallExp": 1,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "ECE"
    })

    const employee4 = new empModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": 30000,
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee5 = new empModel({
        "firstName": "Jame",
        "lastName": "roh",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "EEE"
    })

    const employee6 = new empModel({
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": 30000,
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 1,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee7 = new empModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 20000,
        "overallExp": 1,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "ECE"
    })

    const employee8 = new empModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": 30000,
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee9 = new empModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "EEE"
    })

    const employee10 = new empModel({
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": 30000,
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 1,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee11 = new empModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 20000,
        "overallExp": 1,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "ECE"
    })

    const employee12 = new empModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": 30000,
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 1234567860,
        "yearGrad": 2015,
        "gradStream": "CSE"
    })

    const employee13 = new empModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": 35000,
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": 15000,
        "overallExp": 2,
        "contactInfo": 123567890,
        "yearGrad": 2019,
        "gradStream": "EEE"
    })

    empModel.insertMany([employee2, employee3, employee4, employee5, employee6, employee7, employee8, employee9, employee10, employee11, employee12, employee13]);
    res.json({ success: 1 });
});

app.get("/findAll", function (req, res) {
    empModel.find({}, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.json(result);
        }
    });
});


app.get("/updateOne", function (req, res) {
    empModel.updateMany(
        { "salary": { $gt: 30000 } }, { $set: { "salary": 28000 } },
        (err, result) => {
            if (err)
                console.log(err);
            else {
                res.json(result);
            }
        }
    );
});

app.get("/deleteOne", function (req, res) {
    empModel.deleteMany({ "lastCompany": "Y" }, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.json(result);
        }
    });
});
app.listen(5000);