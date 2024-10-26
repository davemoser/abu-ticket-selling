import { existsSync, fstat, readdirSync, readFileSync, renameSync } from "fs";
import { sendMail } from "./mailsender";
import 'dotenv/config';
import { join } from "path";
import { printTicket } from "./ticketprinter";

const DRY = process.env.DRY === 'true';
const TICKET_INPUT_PATH = process.env.TICKET_INPUT;
const TICKET_OUTPUT_PATH = process.env.TICKET_OUTPUT;
let FILE_NAME="";
let INPUT_FILE_PATH="";
let OUTPUT_FILE_PATH="";

const ARGUMENT = process.argv.slice(2).join(' ');
console.log(`Argument: '${ARGUMENT}'`);
/**
 * Main function to run
 */
async function run(){
    try {
        await checkTicketPathAndSetFileName()

        if(ARGUMENT.includes('@')){
            console.log('sending mail');
        } else {
            console.log('printing tickets');
            printTicket(INPUT_FILE_PATH, DRY);
        }

    // moveTicketToOutput();
    } catch(e) {
        console.log(e);
        setTimeout(()=>{
            console.log('tschöö');
        }, 20000);
    }
    
    
}

async function moveTicketToOutput() {
    renameSync(INPUT_FILE_PATH, OUTPUT_FILE_PATH);
}




async function checkTicketPathAndSetFileName() {
    const dir = readdirSync(TICKET_INPUT_PATH);
    if(dir.length !==1) {
        throw `Input contains not exactly one ticket. Aborting.`
    }
    FILE_NAME = dir[0];
    INPUT_FILE_PATH = join(TICKET_INPUT_PATH, FILE_NAME);
    console.log(`Input ticket file: ${INPUT_FILE_PATH}`);
    OUTPUT_FILE_PATH = join(TICKET_OUTPUT_PATH, FILE_NAME);

    if(!existsSync(INPUT_FILE_PATH)) {
        throw 'Input File does not exist. Aborting'
    }

    if(!existsSync(TICKET_OUTPUT_PATH)) {
        throw 'Output Folder does not exist. Aborting'
    }
    if(existsSync(OUTPUT_FILE_PATH)) {
        throw 'Ticket already exists in output. Aborting'
    }
}

run();
