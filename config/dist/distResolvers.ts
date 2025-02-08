import {ResolveOptions} from "webpack";

export function distResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}