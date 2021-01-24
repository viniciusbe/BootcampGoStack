import { container } from 'tsyringe';

import IStorageProvider from './StoragedProviders/models/IStorageProvider';

import DiskStorageProvider from './StoragedProviders/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
