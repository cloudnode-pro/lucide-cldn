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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 13.29-3.33-10a.4.4 0 0 0-.14-.18.38.38 0 0 0-.22-.11.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18.38.38 0 0 0-.26-.08.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"/></svg>
 */
export class Gitlab extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="m22 13.29-3.33-10a.4.4 0 0 0-.14-.18.38.38 0 0 0-.22-.11.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18.38.38 0 0 0-.26-.08.4.4 0 0 0-.23.07.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"/></svg>`
        ).node);
    }
}
