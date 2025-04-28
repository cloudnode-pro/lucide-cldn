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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16Q10.8 16.5 12 16.5C13.2 16.5 13.5 16.3 14 16M15 12"/><path d="M19.4 6.8A9 9 0 0 1 20.8 10.2 2 2 0 0 1 20.8 13.8 9 9 0 0 1 3.2 13.8 2 2 0 0 1 3.2 10.2 9 9 0 0 1 12 3C14 3 15.5 4.1 15.5 5.5S14.6 8 13.5 8Q12.1 8 12 7M9 12"/></svg>
 */
export class Baby extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 16Q10.8 16.5 12 16.5C13.2 16.5 13.5 16.3 14 16M15 12"/><path d="M19.4 6.8A9 9 0 0 1 20.8 10.2 2 2 0 0 1 20.8 13.8 9 9 0 0 1 3.2 13.8 2 2 0 0 1 3.2 10.2 9 9 0 0 1 12 3C14 3 15.5 4.1 15.5 5.5S14.6 8 13.5 8Q12.1 8 12 7M9 12"/></svg>`
        ).node);
    }
}
