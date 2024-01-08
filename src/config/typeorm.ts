import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'postgres',
    host: `localhost`,
    port: 5432,
    username: `postgres`,
    password: `1234`,
    database: `ecom`,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    // autoLoadEntities: true,
    synchronize: false,
}
export const configs = config
export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);