/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
import {optimize as svgo} from "svgo";

let prefixCounter = 0;

export async function optimiseSvg(svg: string) {
    return svgo(svg, {
        multipass: true,
        plugins: [
            {
                name: "cleanupAttrs",
                params: {
                    newlines: true,
                    trim: true,
                    spaces: true,
                },
            },
            {
                name: "cleanupIds",
                params: {
                    remove: true,
                    minify: true,
                    preserve: [],
                    preservePrefixes: [],
                    force: false,
                },
            },
            {
                name: "cleanupListOfValues",
                params: {
                    floatPrecision: 1,
                    leadingZero: true,
                    defaultPx: true,
                    convertToPx: false,
                },
            },
            {
                name: "cleanupNumericValues",
                params: {
                    floatPrecision: 1,
                    leadingZero: false,
                    defaultPx: true,
                    convertToPx: false,
                },
            },
            "collapseGroups",
            "convertColors",
            "convertEllipseToCircle",
            "convertOneStopGradients",
            {
                name: "convertPathData",
                params: {
                    applyTransforms: true,
                    applyTransformsStroked: true,
                    makeArcs: {
                        threshold: 2.5,
                        tolerance: 0.5,
                    },
                    straightCurves: true,
                    convertToQ: true,
                    lineShorthands: true,
                    convertToZ: true,
                    curveSmoothShorthands: true,
                    floatPrecision: 1,
                    transformPrecision: 0,
                    smartArcRounding: true,
                    removeUseless: true,
                    collapseRepeated: true,
                    utilizeAbsolute: true,
                    forceAbsolutePath: true,
                },
            },
            {
                name: "convertStyleToAttrs",
                params: {
                    keepImportant: true,
                },
            },
            {
                name: "convertTransform",
                params: {
                    convertToShorts: true,
                    degPrecision: 1,
                    floatPrecision: 1,
                    transformPrecision: 0,
                    matrixToTransform: true,
                    shortTranslate: true,
                    shortScale: true,
                    shortRotate: true,
                    removeUseless: true,
                    collapseIntoOne: true,
                },
            },
            {
                name: "inlineStyles",
                params: {
                    onlyMatchedOnce: true,
                    removeMatchedSelectors: true,
                    useMqs: [""],
                    usePseudos: [""],
                },
            },
            {
                name: "mergePaths",
                params: {
                    floatPrecision: 1,
                    noSpaceAfterFlags: true,
                },
            },
            "mergeStyles",
            {
                name: "minifyStyles",
                params: {
                    usage: {
                        tags: true,
                        ids: true,
                        classes: true,
                        force: false,
                    }
                },
            },
            "moveElemsAttrsToGroup",
            {
                name: "prefixIds",
                params: {
                    delim: '',
                    prefix: () => String(++prefixCounter),
                    prefixIds: true,
                    prefixClassNames: false
                },
            },
            "removeComments",
            "removeDesc",
            "removeDimensions",
            "removeDoctype",
            "removeEditorsNSData",
            "removeEmptyAttrs",
            "removeEmptyContainers",
            "removeEmptyText",
            "removeHiddenElems",
            "removeMetadata",
            "removeOffCanvasPaths",
            "removeRasterImages",
            "removeScriptElement",
            "removeStyleElement",
            "removeTitle",
            "removeUnknownsAndDefaults",
            "removeUnusedNS",
            "removeUselessDefs",
            "removeUselessStrokeAndFill",
            "removeXMLNS",
            "removeXMLProcInst",
            "removeXlink",
            "reusePaths",
            "sortAttrs",
            "sortDefsChildren",
        ],
    });
}
