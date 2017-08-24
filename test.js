const Excel = require('exceljs');
const workbook = new Excel.Workbook();
const filePath = './libs/radar.csv';

cells = []

techRadarMap = {};
categories = [];
competencies = [];

function test() {
    return workbook.csv.readFile(filePath).then((worksheet) => {
        worksheet.getColumn(1).eachCell((cell, rowNumber) =>{
            console.log(cells.indexOf(cell.value));
            if (rowNumber !== 1) cells.push(cell.value);
        })
    }).then(() => {
        return cells;
    });
}

function map() {
    return workbook.csv.readFile(filePath).then((worksheet) => {
        worksheet.eachRow((row, rowNumber) =>{
            let category = row.getCell(3).value;
            let competency = row.getCell(1).value;
            if (rowNumber !== 1){
                if (!(category in techRadarMap)) {
                    techRadarMap[category] = [competency];
                } else {
                    techRadarMap[category].push(competency);
                }
            } 
        })
    });   
}

function getCategories() {
    return Object.keys(techRadarMap);
}

function getCompetencies() {
    return Object.keys(techRadarMap).reduce(function(competencies, category) {
        return competencies.concat(techRadarMap[category]);
    }, []);
}

// test().then( cells => console.log(cells));
// map().then(() => console.log(getCategories()));
map().then(() => console.log(getCompetencies()));
