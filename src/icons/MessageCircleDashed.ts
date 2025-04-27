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

export class MessageCircleDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.5 3.1 12 3 10.5 3.1M19.3 6.8A11 11 0 0 0 17.2 4.7M20.9 13.5 21 12 20.9 10.5M17.2 19.3A11 11 0 0 0 19.3 17.2M10.5 20.9 12 21 13.5 20.9M3.5 17.5 2 22 6.5 20.5M3.1 10.5 3 12 3.1 13.5M6.8 4.7A11 11 0 0 0 4.7 6.8"/></svg>`
        ).node);
    }
}
