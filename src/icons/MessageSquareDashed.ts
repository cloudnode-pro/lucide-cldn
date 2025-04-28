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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17H7l-4 4v-7m11 3h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1a2 2 0 0 1-2 2m2-8v1M3 9v1m2-7a2 2 0 0 0-2 2m6-2h1"/></svg>
 */
export class MessageSquareDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17H7l-4 4v-7m11 3h1M14 3h1m4 0a2 2 0 0 1 2 2m0 9v1a2 2 0 0 1-2 2m2-8v1M3 9v1m2-7a2 2 0 0 0-2 2m6-2h1"/></svg>`
        ).node);
    }
}
