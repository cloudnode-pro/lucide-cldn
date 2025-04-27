import {SvgComponent} from "@cldn/components";

/**
 * A Lucide icon component.
 */
export class Icon extends SvgComponent {
    protected constructor(element: SVGSVGElement) {
        super(element);
        this.set("ariaHidden", "true");
    }
}
