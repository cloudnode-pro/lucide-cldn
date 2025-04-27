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

export class CloudCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.9 19.8 10.5 20.7M13.1 14.2 13.5 13.3M13.1 19.8A3 3 0 1 0 11 14.2L10.5 13.3"/><path d="M13.5 20.7 13.1 19.7A3 3 0 1 1 11 14.3M14.8 15.9 15.7 15.5M14.8 18.1 15.7 18.5"/><path d="M4.2 15.1A7 7 0 1 1 14.2 5.2 7 7 0 0 1 15.6 8H17.5A4.5 4.5 0 0 1 20 16.2M9.2 15.9 8.3 15.5M9.2 18.1 8.3 18.5"/></svg>`
        ).node);
    }
}
