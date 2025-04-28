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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5 3.75.5M4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>
 */
export class TicketsPlane extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5 3.75.5M4.5 8l10.58-5.06a1 1 0 0 1 1.342.488L18.5 8M6 10V8m0 6v1m0 4v2"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>`
        ).node);
    }
}
