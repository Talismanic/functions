const moment = require(‘validator’);
exports.isCreditCard = functions.https.onRequest((req, res) => {
 if (req.method === ‘PUT’) {
 res.status(403).send(‘Forbidden!’);
 }
 cors(req, res, () => {
 let ccnum = req.query.ccnum;
 if (!ccnum) {
 ccnum = req.body.ccnum;
 }
 let msg;
 if(validator().isCreditCard(ccnum)){
 msg = ‘Valid credit card’;
 }else{
 msg = ‘Invalid credit card’;
 }
 res.status(200).send(msg);
 });
});