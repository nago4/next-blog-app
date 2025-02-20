declare module "canvas" {
  export class Canvas {
    constructor(width?: number, height?: number);
    getContext(contextId: "2d"): CanvasRenderingContext2D;
    toDataURL(type?: string, quality?: any): string;
    width: number;
    height: number;
  }

  export class Image {
    src: string | Buffer;
    width: number;
    height: number;
    onload: () => void;
    onerror: (err: Error) => void;
  }
}
