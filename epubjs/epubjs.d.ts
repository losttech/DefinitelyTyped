// Type definitions for EPUBJS
// Project: https://github.com/futurepress/epub.js/
// Definitions by: Victor Milovanov https://plus.google.com/+ВикторМилованов/
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EPubJS {
    /** @summary */
    interface IEPubBook {
        /** @summary */
        open(bookUrl: string): void;
        open(epubBlob: ArrayBuffer): void;
        renderTo(element: HTMLElement): void;
    }

    /** @summary */
    interface OpenBookOptions {
        bookPath?: string;
        version?: number;
        restore?: boolean;
        storage?: boolean;
        spreads?: boolean;
        fixedLayout?: boolean;
        width?: boolean;
        height?: boolean;
    }
}

/** @summary opens EPub book from the specified URL, and default options */
declare function ePub(bookUrl: string): EPubJS.IEPubBook;
declare function ePub(epubBlob: ArrayBuffer): EPubJS.IEPubBook;
declare function ePub(bookUrl: string, options: EPubJS.OpenBookOptions): EPubJS.IEPubBook;
declare function ePub(options: EPubJS.OpenBookOptions): EPubJS.IEPubBook;
