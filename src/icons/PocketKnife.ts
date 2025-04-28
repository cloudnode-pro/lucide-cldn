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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2V3C3 4 5 4 5 5S3 6 3 7 5 8 5 9 3 10 3 11 5 12 5 13M20.8 8.8A4 4 0 0 0 15.2 3.2L3.2 15.2A4 4 0 1 0 8.8 20.8Z"/><path d="M18 11.7V22A4 4 0 0 0 22 18V6"/></svg>
 */
export class PocketKnife extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2V3C3 4 5 4 5 5S3 6 3 7 5 8 5 9 3 10 3 11 5 12 5 13M20.8 8.8A4 4 0 0 0 15.2 3.2L3.2 15.2A4 4 0 1 0 8.8 20.8Z"/><path d="M18 11.7V22A4 4 0 0 0 22 18V6"/></svg>`
        ).node);
    }
}
