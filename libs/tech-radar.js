const Excel = require('exceljs');

function TechRadar(fp) {
    const workbook = new Excel.Workbook();
    const filePath = fp;
    const techRadarMap = {};

    this.map = () => {
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

    this.getCompetencies = () => {
        Object.keys(techRadarMap).reduce(function(competencies, category) {
            return competencies.concat(techRadarMap[category]);
        }, []);;    
    }

    this.getCategories = () => Object.keys(techRadarMap);

    this.getCompetenciesByCategory = (category) => techRadarMap[category];
}

module.exports = TechRadar;
