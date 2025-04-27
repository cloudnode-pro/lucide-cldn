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

export class LampDesk extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 2.3A1 1 0 0 1 11.7 2.3L14.2 4.8 20.2 6A1 1 0 0 1 20.7 7.7L13.7 14.7A1 1 0 0 1 12 14.2L10.8 8.2 8.3 5.7A1 1 0 0 1 8.3 4.3zM14.2 4.8 10.8 8.2M3 20A2 2 0 0 1 5 18H9A2 2 0 0 1 11 20V21A1 1 0 0 1 10 22H4A1 1 0 0 1 3 21z"/><path d="M9 6.5 4.4 11.3A1 1 0 0 0 4 12.5L7 18"/></svg>`
        ).node);
    }
}
