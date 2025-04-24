declare module "simplemde" {
    export default class SimpleMDE {
        constructor(options: any);
        value(): string;
        value(val: string): void;
        codemirror: {
            on(event: string, callback: () => void): void;
        };
    }
}