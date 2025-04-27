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

export class Star extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.5 2.3A.5.5 0 0 1 12.5 2.3L14.8 7A2 2 0 0 0 16.4 8L21.5 9A.5.5 0 0 1 21.8 9.8L18.1 13.4A2 2 0 0 0 17.5 15.4L18.4 20.3A.5.5 0 0 1 17.6 21L13 18.6A2 2 0 0 0 11 18.6L6.4 21A.5.5 0 0 1 5.6 20.5L6.6 15.3A2 2 0 0 0 5.8 13.4L2.2 9.8A.5.5 0 0 1 2.5 8.8L7.6 8.2A2 2 0 0 0 9.2 7z"/></svg>`
        ).node);
    }
}
