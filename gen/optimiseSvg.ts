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

export async function optimiseSvg(svg: string) {
    return svgo(svg, {
        multipass: true,
        js2svg: {pretty: false},
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
            "removeXMLNS",
            "removeScriptElement",
            "convertStyleToAttrs",
            "removeStyleElement",
            {
                name: "removeAttrs",
                params: {
                    attrs: ["class"],
                },
            },
            "removeDimensions",
        ],
    });
}
