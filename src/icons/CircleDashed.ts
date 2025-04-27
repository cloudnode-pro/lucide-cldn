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

export class CircleDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.1 2.2A10 10 0 0 1 13.9 2.2M13.9 21.8A10 10 0 0 1 10.1 21.8M17.6 3.7A10 10 0 0 1 20.3 6.4M2.2 13.9A10 10 0 0 1 2.2 10.1M20.3 17.6A10 10 0 0 1 17.6 20.3M21.8 10.1A10 10 0 0 1 21.8 13.9M3.7 6.4A10 10 0 0 1 6.4 3.7M6.4 20.3A10 10 0 0 1 3.7 17.6"/></svg>`
        ).node);
    }
}
