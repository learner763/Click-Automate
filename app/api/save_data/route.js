import pkg from 'pg'
import nodemailer from 'nodemailer'
let pool=new pkg.Pool({
    connectionString: 'postgresql://neondb_owner:npg_Idnpy9Ht6sqj@ep-restless-firefly-aql6kr6n-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
})
pool.connect()
let transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'support.clickautomate@gmail.com',
        pass: 'loawdxtwgywgukwg'
    }
})
export async function POST(req) {
    let body=await req.json()
    let results=await pool.query('insert into public.responces (name,email,whatsapp,service,message,meeting_time) values ($1, $2, $3, $4, $5, $6)', [body.name, body.email, body.whatsapp, body.service, body.message, `${body.meeting_time} ${body.timezone}`])
    if(results.rowCount>0)
    {
        await Promise.all([
            transporter.sendMail({
            from:'support.clickautomate@gmail.com',
            to:body.email,
            subject:'Service Request Received',
            text:
`Thank you for contacting Click Automate.

We have successfully received your service request.
Our team will review your message and get back to you as soon as possible.

For any further assistance, feel free to contact us:

Email: clickautomate2@gmail.com
WhatsApp: +357 95 572311

Best regards,
Click Automate Support`
        }),

        transporter.sendMail({
            from:'support.clickautomate@gmail.com',
            to:'clickautomate2@gmail.com',
            subject:'New Service Request',
            text:
`Click Automate have got a new service request!

Name: ${body.name}

Email: ${body.email}

WhatsApp: ${body.whatsapp}

Service: ${body.service}

Meeting Time: ${body.meeting_time} ${body.timezone}

Message: ${body.message}`
        })
        ])
        return Response.json({ success: true });
    }
    else
    {
        return Response.json({ success: false });
    }
}