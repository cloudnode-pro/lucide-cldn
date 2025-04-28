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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8 18.7 5.7A10 10 0 0 0 12 3Q10.5 3 9.1 3.5M8 16H3V21M3 12Q3.1 8.2 5.6 5.6"/><path d="M3 16 5.3 18.3A10 10 0 0 0 12 21Q15.8 20.9 18.4 18.4M21 12Q21 13.5 20.5 14.9M21 3V8H16M22 22 2 2"/></svg>
 */
export class RefreshCwOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8 18.7 5.7A10 10 0 0 0 12 3Q10.5 3 9.1 3.5M8 16H3V21M3 12Q3.1 8.2 5.6 5.6"/><path d="M3 16 5.3 18.3A10 10 0 0 0 12 21Q15.8 20.9 18.4 18.4M21 12Q21 13.5 20.5 14.9M21 3V8H16M22 22 2 2"/></svg>`
        ).node);
    }
}
