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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 20.3 21 12.3M16 6 7.6 14.6A2 2 0 0 0 7.6 17.4 2 2 0 0 0 10.4 17.4L18.8 8.8A4 4 0 0 0 18.8 3.2 4 4 0 0 0 13.2 3.2L4.8 11.8A6 6 0 1 0 13.2 20.2"/></svg>
 */
export class Paperclip extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 20.3 21 12.3M16 6 7.6 14.6A2 2 0 0 0 7.6 17.4 2 2 0 0 0 10.4 17.4L18.8 8.8A4 4 0 0 0 18.8 3.2 4 4 0 0 0 13.2 3.2L4.8 11.8A6 6 0 1 0 13.2 20.2"/></svg>`
        ).node);
    }
}
