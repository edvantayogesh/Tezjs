import type { Module } from "@nuxt/types";
import { name, version } from '../package.json';
import { defaultContainer } from "./const/core.const";
import { PageCollection } from "./domain/page-collection";
import { StrapiModuleConfig } from "./interface/strapi-module-config";

const strapiModule: Module<any> = async function strapiModule(moduleOptions: StrapiModuleConfig) {
    const nuxtInstance = this;
    //if (moduleOptions)
    //    defaultContainer.setOption(moduleOptions);
    nuxtInstance.nuxt.hook('build:before', async (builder) => {
        console.log(`Strapi payload generator start`)
        if (nuxtInstance.options.tez && nuxtInstance.options.tez.strapi)
            defaultContainer.setOption(nuxtInstance.options.tez.strapi)
        var pageCollection = new PageCollection(builder);
        await pageCollection.generate();
        console.log(`Strapi payload generator end`)

    })
};

(strapiModule as any).meta = { name, version }

export default strapiModule