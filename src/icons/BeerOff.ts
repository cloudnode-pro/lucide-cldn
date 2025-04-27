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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13V18M17 11.5V8M17 11H18A3 3 0 0 1 20.7 15.2M2 2 22 22M5 8V20A2 2 0 0 0 7 22H15A2 2 0 0 0 17 20V17"/><path d="M7.5 7.5 5.5 8A2.5 2.5 0 0 1 3.7 3.7M8.7 3.2C9.3 2.8 10 2 11 2 12.6 2 13 3.5 14 3.5S15.7 3 16.5 3A1 1 0 1 1 16.5 8C15.7 8 15 7.5 14 7.5L13.2 7.6M9 14.6V18"/></svg>
 */
export class BeerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13V18M17 11.5V8M17 11H18A3 3 0 0 1 20.7 15.2M2 2 22 22M5 8V20A2 2 0 0 0 7 22H15A2 2 0 0 0 17 20V17"/><path d="M7.5 7.5 5.5 8A2.5 2.5 0 0 1 3.7 3.7M8.7 3.2C9.3 2.8 10 2 11 2 12.6 2 13 3.5 14 3.5S15.7 3 16.5 3A1 1 0 1 1 16.5 8C15.7 8 15 7.5 14 7.5L13.2 7.6M9 14.6V18"/></svg>`
        ).node);
    }
}
