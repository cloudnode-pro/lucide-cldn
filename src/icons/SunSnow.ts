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

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22m-5-9-3 6 1.5 3M2 12h1"/><path d="m20 10-1.5 2 1.5 2M3.64 18.36l.7-.7m0-11.32-.7-.7"/></svg>
 */
export class SunSnow extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 21v-1m0-16V3m0 6a3 3 0 0 0 0 6m4 5 1.25-2.5L18 18M14 4l1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22m-5-9-3 6 1.5 3M2 12h1"/><path d="m20 10-1.5 2 1.5 2M3.64 18.36l.7-.7m0-11.32-.7-.7"/></svg>`
        ).node);
    }
}
