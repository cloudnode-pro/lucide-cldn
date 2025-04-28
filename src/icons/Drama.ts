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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5C22 14 18 17 16 17S10 14 10 5Q10 2 16 2C22 2 22 3 22 5"/><path d="M17.4 9.9A2 2 0 0 1 14.6 9.9M10.1 7.1Q8.5 7.2 6 8.6.8 11.6 2.3 14.2C6.8 22 11.8 22.6 13.5 21.6 14.4 21.1 15.4 19.5 15.4 16.9"/><path d="M9.1 16.5A2 2 0 0 1 11.5 15.1"/></svg>
 */
export class Drama extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5C22 14 18 17 16 17S10 14 10 5Q10 2 16 2C22 2 22 3 22 5"/><path d="M17.4 9.9A2 2 0 0 1 14.6 9.9M10.1 7.1Q8.5 7.2 6 8.6.8 11.6 2.3 14.2C6.8 22 11.8 22.6 13.5 21.6 14.4 21.1 15.4 19.5 15.4 16.9"/><path d="M9.1 16.5A2 2 0 0 1 11.5 15.1"/></svg>`
        ).node);
    }
}
