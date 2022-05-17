import { CommonPathResolver, writeFileSync } from "@tezjs/common";
import { ImportState } from "../interface/import-state";
import { tezTemplate } from "./tez.template";

export const appContainer:
    {
        addOrUpdateTezTS():void
    } = new (class {
        tsCodeCache:string
        addOrUpdateTezTS(){
            let pathResolver = new CommonPathResolver();
            let existsFolders = pathResolver.getExistsFolders();
            let refrenceState:ImportState = {imports:'',props:''};
            ['store','router'].forEach(key=> {if(existsFolders[key]) refrenceState.imports += `import * as ${key} from '#${key}';`});
            Object.keys(existsFolders).forEach(key=>{
                if(existsFolders[key]){
                    if(key === "components" || key === "layouts")
                        refrenceState.props += `${key}:import.meta.glob('/${key}/**/*.vue'),`
                    else
                        refrenceState.props += `${key}:${key},`
            } 
        })
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        }
    })();