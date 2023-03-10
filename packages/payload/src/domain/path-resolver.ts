import { CommonPathResolver,getPath } from "@tezjs/common"

export class PathResolver {
    public commonPath:CommonPathResolver;
     
    constructor(){
        this.commonPath = new CommonPathResolver();
    }
    get componentsPath() {
        return this.commonPath.componentsPath;
    }

    get sourceCodePath() {
        return this.commonPath.sourceCodePath;
    }

    get publicFolder() {
        return this.commonPath.publicFolder;
    }

    get payloadPath() {
        return this.commonPath.payloadPath;
    }

    get rootPath() {
        return this.commonPath.cachePath;
    }

    get routesJsonPath() {
        return this.commonPath.routesJsonPath;
    }

    get robotsTxtPath() {
        return getPath([this.publicFolder, "robots.txt"]);
    }

    get redirectRoutesJsonPath() {
        return this.commonPath.redirectRoutesJsonPath;
    }

    get sitemapJsonPath() {
        return getPath([this.rootPath, "sitemap.json"]);
    }

    get globJsonPath() {
        return getPath([this.rootPath, "glob.json"]);
    }

    get routeComponentsPath() {
        return getPath([this.rootPath, "route-components.json"]);
    }

    get sitemapXmlPath() {
        return getPath([this.publicFolder, "sitemap.xml"]);
    }

    get sitemapNotMappedJsonPath() {
        return getPath([this.publicFolder, "sitemap-not-mapped.json"]);
    }

    getCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "collections", collectionName], true);
    }

    getFilterCollectionPayloadPath(collectionName: string): string {
        return getPath([this.payloadPath, "filter-collections", collectionName], true);
    }

    pathExists(path:string){
        return this.commonPath.pathExists(path);
    }
}