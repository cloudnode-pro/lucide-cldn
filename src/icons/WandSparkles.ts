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
import {Icon} from "../Icon.js";

export class WandSparkles extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.6 3.6 20.4 2.4A1.2 1.2 0 0 0 18.6 2.4L2.4 18.6A1.2 1.2 0 0 0 2.4 20.4L3.6 21.6A1.2 1.2 0 0 0 5.4 21.6L21.6 5.4A1.2 1.2 0 0 0 21.6 3.6M14 7 17 10M5 6V10M19 14V18M10 2V4M7 8H3M21 16H17M11 3H9"/></svg>`
        ).node);
    }
}
