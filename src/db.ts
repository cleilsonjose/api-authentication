import {Pool} from 'pg';

const connectionString = 'postgres://zipgybij:meK_JMkaf7Kgz8Hbo8vtbv_2Ay2A3cTx@fanny.db.elephantsql.com/zipgybij';
const db = new Pool({connectionString});

export default db;
