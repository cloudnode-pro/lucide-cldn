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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 17H11.7A2 2 0 0 0 13.1 16.5L18 12M12 13.5 15.8 14M4.5 8 15.1 3A1 1 0 0 1 16.4 3.3L18.5 8M6 10V8M6 14V15M6 19V21"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>
 */
export class TicketsPlane extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 17H11.7A2 2 0 0 0 13.1 16.5L18 12M12 13.5 15.8 14M4.5 8 15.1 3A1 1 0 0 1 16.4 3.3L18.5 8M6 10V8M6 14V15M6 19V21"/><rect width="20" height="13" x="2" y="8" rx="2"/></svg>`
        ).node);
    }
}
