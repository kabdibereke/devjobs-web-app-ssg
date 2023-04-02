import { IJobs } from "@/interface/interface";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Filter {
	filterTitle: string;
	filterLocation: string;
	check: boolean;
}

const initialState: Filter = {
	filterTitle: "",
	filterLocation: "",
	check: false,
};

export const FilterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilterTitle: (state, action) => {
			state.filterTitle = action.payload;
		},
		setFilterLocation: (state, action) => {
			state.filterLocation = action.payload;
		},
		setCheck: (state, action) => {
			state.check = action.payload;
		},
	},
});

export const { setFilterTitle, setFilterLocation, setCheck } =
	FilterSlice.actions;

export default FilterSlice.reducer;
