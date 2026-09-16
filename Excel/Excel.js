const Exceljs = require ('exceljs'); //assign installed exceljs from google to the variable Exceljs
import {test,expect} from "@playwright/test"


async function writeExcelTest(searchValue,repalcedValue,change,filepath){
    const workbook = new Exceljs.Workbook(); //accessing excel
    await workbook.xlsx.readFile(filepath) //fileapath
    const worksheet = workbook.getWorksheet("Sheet1")
    const output = await readExcel(worksheet,searchValue)
//    const cell = worksheet.getCell(output.row,output.coumun+change.colChange)//
const cell = worksheet.getCell(output.row,output.coumun)//
cell.value=repalcedValue
await workbook.xlsx.writeFile(filepath);

}

async function readExcelTest(worksheet,searchvalue){
    let output = {row:-1, column:-1} //excel sheet wont suppport - value. if value not found
    
}