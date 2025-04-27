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

export class Croissant extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.6 13.1 10.4 10C12.3 8.9 15.2 11.7 14 13.6L10.9 19.4C8.8 23.2.8 15.2 4.6 13.1M10.5 9.5 9.5 7.2Q9.1 6.1 8 6H4.5C2.8 6 2 6.5 2 8.5A8 8 0 0 0 4 13.3M8 6C8 4.5 8.2 2 6 2 4 2 3.5 4.2 3.5 6M14.5 13.5 16.8 14.5Q17.9 14.9 18 16V19.5C18 21.2 17.5 22 15.5 22A8 8 0 0 1 10.7 20M18 16C19.6 16 22 15.8 22 18 22 20 19.8 20.5 18 20.5"/></svg>`
        ).node);
    }
}
