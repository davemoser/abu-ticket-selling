import * as nodemailer from 'nodemailer';

export async function sendMail(to: string) {
    const transporter = createTransporter();
}

function createTransporter(){
    return nodemailer.createTransport({
        host: "asmtp.mail.hostpoint.ch",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "finanzen@tvstammertal.ch",
            pass: process.env.EMAIL_CREDENTIALS,
        },
    });
}

  

// async function sendMails(emailObj) {
//     // send mail with defined transport object

//     if (dry) {
//         console.log(JSON.stringify(emailObj, null, 4));
//     } else {
//         // actually send the email
//         const info = await transporter.sendMail(emailObj);
//         console.log("Message sent: %s", info.messageId);
//     }
// }

// function createMailContent(member) {
//     return {
//         from: '"Dave Moser" <finanzen@tvstammertal.ch>', // sender address
//         to: member.Email, // list of receivers
//         cc: "finanzen@tvstammertal.ch",
//         subject: "Rechnung Mitgliederbeitrag Turnverein 2024", // Subject line
//         text: `${member.Anrede} ${member.Vorname}

// Angehängt sende ich dir die Rechnung für den Mitgliederbeitrag 2024.
// Ich bitte dich, diese in den nächsten 30 Tagen zu begleichen.

// Denke daran, falls du zusatzversichert bist, kann es sein, dass die 
// Krankenkasse einen Teil der Kosten des Beitrags übernimmt.
// Falls du bei der SWICA krankenversicherst bist, kannst du über das 
// SWICA-Formular: 
// https://drive.google.com/file/d/12WPmpqwGvRt3rC51VEFrx2hf1Leq2f3s/view?usp=drive_link 
// einen Teil des Beitrags zurückfordern.

// Mit Turnergruss
// Dave Moser - Kassier`, // plain text body
//         attachments: [
//             {
//                 path: `./bills/Mitgliederbeitrag_2024_${member.Vorname}_${member.Name}.pdf`
//             }
//         ]
//     };
// }
