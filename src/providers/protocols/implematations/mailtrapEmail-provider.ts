import { EmailProvider, Message } from "../email-provider";
import nodemailer from 'nodemailer'
export class MailtrapEmailProvider implements EmailProvider {
    private transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({

            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b079d40d4c9852",
                pass: "e091b21fd59acf"
            }

        })
    }
    async sendEmail(message: Message): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },

            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body

        })
    };
} 