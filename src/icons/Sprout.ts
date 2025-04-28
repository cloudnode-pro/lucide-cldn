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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20H17M10 20C15.5 17.5 10.8 13.6 13 10"/><path d="M9.5 9.4Q11.1 10.7 11.8 13.1 8.8 13.8 7 12.8 5.1 12 4 8.6 8 8 9.5 9.4M14.1 6A7 7 0 0 0 13 10Q15.8 9.8 17.3 8.6 18.8 7.3 19 4C16.3 4.1 15 5 14.1 6"/></svg>
 */
export class Sprout extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20H17M10 20C15.5 17.5 10.8 13.6 13 10"/><path d="M9.5 9.4Q11.1 10.7 11.8 13.1 8.8 13.8 7 12.8 5.1 12 4 8.6 8 8 9.5 9.4M14.1 6A7 7 0 0 0 13 10Q15.8 9.8 17.3 8.6 18.8 7.3 19 4C16.3 4.1 15 5 14.1 6"/></svg>`
        ).node);
    }
}
