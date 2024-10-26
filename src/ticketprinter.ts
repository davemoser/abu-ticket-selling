import { existsSync } from "fs";
import { join } from "path";
import { print } from "pdf-to-printer";
import { getPrinters } from "pdf-to-printer";
import { getDefaultPrinter } from "pdf-to-printer";

export async function printTicket(pathToTicket: string, dry: boolean){   
    const printer = await getDefaultPrinter();
    console.log(printer.name);
    // console.log(__dirname);
    // console.log(existsSync('C:\\snapshot\\abu-ticket-selling\\node_modules'));
    // console.log(existsSync('C:\\snapshot\\abu-ticket-selling\\node_modules\\pdf-to-printer\\dist\\SumatraPDF-3.4.6-32.exe'));
    await print(join(process.cwd(), pathToTicket), {
        sumatraPdfPath: 'SumatraPDF-3.5.2-64.exe'
    });
    console.log('printed ticket');
}