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
            `<img src="https://i.pinimg.com/564x/d5/7c/fd/d57cfd2b27ed2f84f3a8068bc1ae96eb.jpg" alt="Taxi" width="100" height="100">`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
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
            `<img src="https://i.pinimg.com/564x/d5/7c/fd/d57cfd2b27ed2f84f3a8068bc1ae96eb.jpg" alt="Taxi" width="100" height="100">`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error al enviar el correo:', error);
        } else {
            console.log('Correo enviado:', info.response);
        }
    });
}

module.exports = {
    sendEmailCancelacion,
    sendEmailReserva
}