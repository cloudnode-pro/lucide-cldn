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

export class Container extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 7.7A2 2 0 0 0 21.2 6.2L14.9 2.3A2 2 0 0 0 13.2 2.3L2.9 8.3Q2.1 8.7 2 9.7V16.3Q2.1 17.2 2.8 17.8L9.1 21.7A2 2 0 0 0 10.8 21.7L21.1 15.7Q21.9 15.1 22 14.2Z"/><path d="M10 21.9V14L2.1 9.1M10 14 21.9 7.1M14 19.8V11.7M18 17.5V9.4"/></svg>`
        ).node);
    }
}
