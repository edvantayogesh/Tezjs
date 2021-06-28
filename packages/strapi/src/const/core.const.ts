import { StrapiModuleConfig } from "../interface/strapi-module-config";
const DEFAULT_STRAPI_URL = 'http://localhost:1337'
export const defaultContainer:
    {
        setOption(moduleOptions: StrapiModuleConfig): void;
        moduleOptions: StrapiModuleConfig;
    } = new (class {
        ignoreColumns: Array<string> = ["published_at", "created_at", "updated_at", "ParentPage", "ChangeFrequency", "Priority", "__component", "provider"]
        moduleOptions: StrapiModuleConfig = {
            payloadRootPath: "static",
            isDev: true,
            componentNames: [],
            apiUri: DEFAULT_STRAPI_URL,
            pageCollectionConfig: {
                name: "pages",
                fieldName: {
                    title: "title",
                    uri: "URL"
                }
            },
            media: {
                uris: [DEFAULT_STRAPI_URL],
                cdnUri: DEFAULT_STRAPI_URL
            },
            componentDataFieldSelectors: {},
            limit: 10000,
            siteUrl: "http://127.0.0.1",
            serializeJson: { isCamelCase: true }
        };
        setOption(moduleOptions: StrapiModuleConfig) {
            this.moduleOptions = { ...this.moduleOptions, ...moduleOptions };
            this.moduleOptions.ignoreColumns = this.moduleOptions.ignoreColumns ? this.moduleOptions.ignoreColumns.concat(...this.ignoreColumns) : this.ignoreColumns;
        }
    })();