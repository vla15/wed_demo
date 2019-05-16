require('dotenv').config()
// import fauna from 'faunadb';
// const fauna = require('faunadb');
// const q = fauna.query;

// const client = new fauna.Client({
//   secret: process.env.FAUNADB_SERVER_SECRET
// })

// console.log('whats the secret', process.env.FAUNADB_SERVER_SECRET);

exports.handler = async (event, context, callback) => {
  try {
      callback(null, {
      statusCode: 200,
      body: JSON.stringify('eff you')
    })
  } catch (e) {
    callback(e);
  }
}
// exports.handler = (event, context, callback) => {
//   return client.query(q.Map(q.Paginate(q.Match(q.Index('all_guests')), q.Lambda('X', q.Get(q.Var('X'))))))
//     .then(res => {
//       console.log('success', res);
//       return callback({
//         statusCode: 200,
//         body: JSON.stringify(res)
//       })
//     })
//     .catch(err => {
//       console.log('error', err);
//       return callback({
//         statusCode: 400,
//         body: JSON.stringify(err)
//       })
//     })
// }