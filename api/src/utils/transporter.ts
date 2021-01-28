import 'dotenv/config';
import nodemailer from 'nodemailer';

const { GMAIL_USER, GMAIL_PASS } = process.env;

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
    },
});
