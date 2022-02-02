// Require Dependencies 
const fetch = require('node-fetch');

// Full API controller ...
const sendNotify = (req,res) => {
    const notification = {
        'title': 'Title of notification api for testing purpose',
        'text' : 'sub topic'
    }
    // Add FCM token here
    const fcm_tokens = ['dG94i9kmTRyiZz_ELF0jxp:APA91bGj-IodOrQMgxI5g3gSfejuEFYrlE0FdCcJjA9DEku0OutzWcZQkcw44Ki_El_HeQpSoSXM3KELX-uABqsswvaW3vzQyN5qZfG9dlxcsDKilmrLx4Bag69snk1WyR1BZ0jtkNoM'];

    const notification_body = {
        'notification' : notification,
        'registration_ids': fcm_tokens
    }

    fetch('https://fcm.googleapis.com/fcm/send', {
        'method' : 'POST',
        'headers': {
            'Authorization' : 'key=' + 'AAAABBONKdk:APA91bHFzSWjMlLl4oe_Nt1jcCB-aPpqRTgvsSxc701RHxqX9raEtGMnZa7GodYGD1KoUaTPwdWOAgBzI9XA04qQGa4yuLeRphL8XWdZ0k0Y9XhoPHcGb1FQN-_LIxeS2X4_6bXiAalt',
            'Content-Type': 'application/json'
        },
        'body' : JSON.stringify(notification_body)
    }).then(() => {
        res.status(200).send('Notification send succesfully');
    }).catch((err) => {
        res.status(400).send('Something went wrong!');
        console.log(err);
    })
}

module.exports = { sendNotify }