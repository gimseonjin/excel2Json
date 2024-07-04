// src/services/excel-to-json.service.ts

import { Injectable } from '@nestjs/common';
import * as xlsx from 'xlsx';
import * as fs from 'fs';

@Injectable()
export class ExcelToJsonService {
  convertExcelToJson(filePath: string): any[] {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
  }

  saveJsonToFile(jsonData: any[], outputFilePath: string): void {
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2));
  }
}
