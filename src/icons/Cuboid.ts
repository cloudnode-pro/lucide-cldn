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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.1 6.4 15.1 2.4A2 2 0 0 0 12.9 2.2L2.9 8.4A2 2 0 0 0 2 10.1V16A2 2 0 0 0 2.9 17.6L8.9 21.6A2 2 0 0 0 11.1 21.8L21.1 15.6A2 2 0 0 0 22 13.9V8A2 2 0 0 0 21.1 6.4"/><path d="M10 22V14L2.3 9.2M10 14 21.8 7.1"/></svg>
 */
export class Cuboid extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.1 6.4 15.1 2.4A2 2 0 0 0 12.9 2.2L2.9 8.4A2 2 0 0 0 2 10.1V16A2 2 0 0 0 2.9 17.6L8.9 21.6A2 2 0 0 0 11.1 21.8L21.1 15.6A2 2 0 0 0 22 13.9V8A2 2 0 0 0 21.1 6.4"/><path d="M10 22V14L2.3 9.2M10 14 21.8 7.1"/></svg>`
        ).node);
    }
}
