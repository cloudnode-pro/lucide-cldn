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

export class Ribbon extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 11.2C11 10 10 9 10 8A2 2 0 0 1 14 8C14 9 13 10 12 11.2M12 18 14.6 14.5"/><path d="M6.2 9A7 7 0 0 1 17.8 9M9.4 14.5 12 11.2"/><path d="M9.4 14.5C7.7 12.2 6 10.2 6 7A6 5 0 0 1 18 7C18 10.2 16.2 12.2 14.6 14.5L18 19A1 1 0 0 1 18 20.5L16 21.8A1 1 0 0 1 14.6 21.6L12 18 9.3 21.6A1 1 0 0 1 8 21.8L6.1 20.5A1 1 0 0 1 5.9 19z"/></svg>`
        ).node);
    }
}
