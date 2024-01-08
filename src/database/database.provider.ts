import { connectionSource } from 'src/config/typeorm';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = connectionSource
      return dataSource.initialize();
    },
  },
];