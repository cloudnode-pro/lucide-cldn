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

export class Recycle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 19H4.8A2 2 0 0 1 3.2 18.1 2 2 0 0 1 3.2 16.3L7.2 9.5M11 19H19.2A2 2 0 0 0 20.8 18.1 2 2 0 0 0 20.8 16.3L19.5 14.3"/><path d="M14 16 11 19 14 22M8.3 13.6 7.2 9.5 3.1 10.6M9.3 5.8 10.4 4A2 2 0 0 1 12 3 2 2 0 0 1 13.5 3.9L17.5 10.7"/><path d="M13.4 9.6 17.4 10.7 18.7 6.7"/></svg>`
        ).node);
    }
}
