import Vue from "vue"

import { numbersFilters } from "./numbersFilters"

Vue.filter("formatNumber", numbersFilters.formatNumber)
