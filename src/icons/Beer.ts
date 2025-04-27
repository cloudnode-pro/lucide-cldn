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

export class Beer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 11H18A3 3 0 0 1 18 17H17M9 12V18M13 12V18M14 7.5C13 7.5 12.6 8 11 8S9 7.5 8 7.5 6.3 8 5.5 8A2.5 2.5 0 0 1 5.5 3C6.3 3 7.1 3.5 8 3.5S9.4 2 11 2 13 3.5 14 3.5 15.7 3 16.5 3A2.5 2.5 0 0 1 16.5 8C15.7 8 15 7.5 14 7.5"/><path d="M5 8V20A2 2 0 0 0 7 22H15A2 2 0 0 0 17 20V8"/></svg>`
        ).node);
    }
}
