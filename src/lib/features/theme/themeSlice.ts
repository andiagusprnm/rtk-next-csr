import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  darkMode: boolean;
}

const initialThemeState: ThemeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    darkModeToggle: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { darkModeToggle } = themeSlice.actions;
export default themeSlice.reducer;
