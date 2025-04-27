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

export class Handshake extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 17 13 19A1 1 0 1 0 16 16"/><path d="M14 14 16.5 16.5A1 1 0 1 0 19.5 13.5L15.6 9.6A3 3 0 0 0 11.4 9.6L10.5 10.5A1 1 0 1 1 7.5 7.5L10.3 4.7A6 6 0 0 1 17.3 3.8L17.9 4.1A2 2 0 0 0 19.3 4.4L21 4"/><path d="M21 3 22 14H20M3 3 2 14 8.5 20.5A1 1 0 1 0 11.5 17.5M3 4H11"/></svg>`
        ).node);
    }
}
