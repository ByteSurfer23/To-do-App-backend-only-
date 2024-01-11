const model = require('../models/models');
const nodeMailer = require('nodemailer');
const { dayfinder, timing } = require('../timing/timing');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jabezthedeveloper@gmail.com',
        pass: 'ibwd hbbg rkmx ycst'
    },
});

async function sendMail() {
    try {
        const todayTasks = await model.find({ 'day': await dayfinder() }).exec();

        await Promise.all(todayTasks.map(async (task) => {
            const [taskHours, taskMinutes] = task.time.split(':').map(Number);
            const taskTimeInMinutes = parseInt(taskHours) * 60 + parseInt(taskMinutes);

            // Check if task time is approaching or equal to the current time
            if (taskTimeInMinutes === await timing()) {
                const mailOptions = {
                    from: 'jabezthedeveloper@gmail.com',
                    to: 'sjabezsam@gmail.com', // Replace with your email address
                    subject: 'Due Task',
                    text: `This is your reminder for the task: ${task.text}`
                };

                // Send email
                const sendMailPromise = new Promise((resolve, reject) => {
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                        } else {
                            console.log('Email Sent:', info.response);
                            resolve(info);
                        }
                    });
                });

                await sendMailPromise;
            }
        }));

        // Check again after 1 minute
        setTimeout(sendMail, 60000);
    } catch (error) {
        console.error('Error in sendMail function:', error);
    }
}

module.exports = sendMail;

// Uncomment the line below if this module is standalone and not imported elsewhere
// sendMail();
