const nodemailer = require('nodemailer');

// Configuración del transporte
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USUARIO,
        pass: process.env.EMAIL_PASS
    }
});



// Función para enviar un correo electrónico de confirmación de reserva
const sendEmailReserva = async (destinatario, detallesEmail) => {
    const mailOptions = {
        from: process.env.EMAIL_USUARIO,
        to: destinatario,
        subject: 'Confirmación de reserva',
        html: `<h1>¡Gracias por reservar con nosotros!</h1>` +
            `<p>${detallesEmail}</p>`+
            `<p>¡Nos vemos pronto!</p>`+
            `<p>Equipo de App Taxio.</p>`+
            `<img src="https://drive.google.com/uc?export=view&id=1XGFRQL3gMfnpufQD1IssGzqgTk6lZD2P" alt="Taxi" width="100" height="100">`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        }
    });
}

//Funcion para enviar un correo electrónico de cancelacion de reserva
const sendEmailCancelacion = async (destinatario, detallesEmail) => {
    const mailOptions = {
        from: process.env.EMAIL_USUSARIO,
        to: destinatario,
        subject: 'Reserva cancelada',
        html: `<h1>¡Esperamos verte pronto!</h1>` +
            `<p>Detalles de la reserva cancelada:</p>`+
            `<p>${detallesEmail}</p>`+
            `<p>¡Nos vemos pronto!</p>`+
            `<p>Equipo de App Taxio.</p>`+
            `<img src="https://drive.google.com/uc?export=view&id=1XGFRQL3gMfnpufQD1IssGzqgTk6lZD2P" alt="Taxi" width="100" height="100">`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } 
    });
}

const sendEmailCancelacionTaxista = async (destinatario, detallesEmail) => {
    const mailOptions = {
        from: process.env.EMAIL_USUARIO,
        to: destinatario,
        subject: 'Cancelación de Reserva de Taxi',
        html: `<h1>El taxita cancelo su reserva.</h1>` +
                `<p>Lamento informarle que su reserva de taxi ha sido cancelada por motivos imprevistos.
                 Le pedimos disculpas por cualquier inconveniente que esto pueda ocasionar.</p>`+
                `<p>Puede reprogramar el viaje con otro taxista. Estaremos encantados
                de recibirle.</p>`+
                `<p>Detalles de la reserva cancelada:</p>`+
                `<p>${detallesEmail}</p>`+
                `<p>¡Nos vemos pronto!</p>`+
                `<p>Equipo de App Taxio.</p>`+
                `<img src="https://drive.google.com/uc?export=view&id=1XGFRQL3gMfnpufQD1IssGzqgTk6lZD2P" alt="Taxi" width="100" height="100">`


    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        }
    });
}


module.exports = {
    sendEmailCancelacion,
    sendEmailReserva,
    sendEmailCancelacionTaxista
}