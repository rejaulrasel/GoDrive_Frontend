import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { TAuthEmail, TNotificationEmail } from '../interface/email.emailjs.params.interface';

// email js configuration
const SERVICE_ID = "godrive";
const PUBLIC_KEY = "7Qg8-mIrW_WLn4mNH";
let TEMPLATE_ID: string;


async function sendEmail(templateId: number, templateParams: TAuthEmail | TNotificationEmail): Promise<EmailJSResponseStatus | null> {
    switch (templateId) {
        case 1:
            TEMPLATE_ID = 'template_2n5btoh'; //OTP
            break;
        case 2:
            TEMPLATE_ID = 'template_t3y7ocb'; //Notification
            break;
        default:
            break;
    }

    try {
        const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return res
    } catch (error) {
        console.log(error);
        return null
    }
}

export default sendEmail;