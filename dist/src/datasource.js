"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'demo',
    username: 'root',
    password: '123456',
    synchronize: true,
    entities: ['dist/src/model/*.js']
});
//# sourceMappingURL=datasource.js.map