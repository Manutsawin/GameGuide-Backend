
// module.exports = {
//     HOST: "localhost",
//     USER: "tuser",
//     port: 5432,
//     PASSWORD: "369361",
//     DB: "postgres",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };

    
module.exports = {
  HOST: "ec2-34-239-241-121.compute-1.amazonaws.com",
  USER: "cseglbabrzaggw",
  port: 5432,
  PASSWORD: "4d7661d9d27c112b2f012fb7c2ea2d97e953396f9ed074bc8231fd65b36fa56f",
  DB: "d52hmf0oigq65g",
  dialect: "postgres",
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};