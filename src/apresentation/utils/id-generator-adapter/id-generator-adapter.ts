import { uuid } from "uuidv4";
import { Generator } from './protocols';
export class GeneratorAdpter implements Generator {

    genrate(): string {
        return uuid()
    }
}