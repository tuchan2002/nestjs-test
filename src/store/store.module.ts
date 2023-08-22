import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { STORE_CONFIG_TOKEN, StoreConfig, StoreFeatureConfig, StoreRootConfig } from './store.config';

let rootStoreConfig: StoreConfig;
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({})
export class StoreModule {
    static forRoot(config?: StoreRootConfig): DynamicModule {
        rootStoreConfig = StoreModule.createConfig(config)
        return {
            module: StoreModule,
            providers: [
                StoreService,
                {
                    provide: STORE_CONFIG_TOKEN,
                    useValue: rootStoreConfig
                }
            ],
            exports: [StoreService],
        }
    }

    static forFeature(config: StoreFeatureConfig): DynamicModule {
        const featureStoreConfig = StoreModule.createConfig({...rootStoreConfig, ...config})
        return {
            module: StoreModule,
            providers: [
                StoreService,
                {
                    provide: STORE_CONFIG_TOKEN,
                    useValue: featureStoreConfig
                }
            ],
            exports: [StoreService],
        }
    }

    private static createConfig(config: StoreConfig): StoreConfig {
        const defaultConfig: StoreConfig = {
            dirname: DEFAULT_STORE_DIRNAME,
            filename: DEFAULT_FILE_NAME
        }

        return {...defaultConfig, ...config};
    }
}
