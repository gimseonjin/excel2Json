// src/commands/excel-to-json.command.ts

import { Command, CommandRunner, Option } from 'nest-commander';
import { ExcelToJsonService } from './excel-to-json.service';

interface ExcelToJsonCommandOptions {
  input: string;
  output: string;
}

@Command({
  name: 'excel-to-json',
  description: 'Convert an Excel file to JSON format',
})
export class ExcelToJsonCommand extends CommandRunner {
  constructor(private readonly excelToJsonService: ExcelToJsonService) {
    super();
  }

  async run(
    inputs: string[],
    options: ExcelToJsonCommandOptions,
  ): Promise<void> {
    if (!options.input || !options.output) {
      console.error('❌ Both input and output file paths are required.');
      return;
    }

    try {
      const jsonData = this.excelToJsonService.convertExcelToJson(options.input);
      this.excelToJsonService.saveJsonToFile(jsonData, options.output);
      console.log(`✅ Excel file has been converted to JSON and saved to ${options.output}`);
    } catch (error) {
      console.error('❌ An error occurred:', error.message);
    }
  }

  @Option({
    flags: '-i, --input <input>',
    description: 'Path to the input Excel file',
  })
  parseInput(val: string): string {
    return val;
  }

  @Option({
    flags: '-o, --output <output>',
    description: 'Path to the output JSON file',
  })
  parseOutput(val: string): string {
    return val;
  }
}
