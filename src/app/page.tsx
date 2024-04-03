'use client';
import { darkModeToggle } from "@/lib/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const theme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

  const handleChangeTheme = () => {
    dispatch(darkModeToggle());
  }
  
  let darkmode = "bg-white";
  if (theme.darkMode) {
    darkmode = "bg-gray-900";
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <button onClick={handleChangeTheme} className="px-5 py-3 bg-gray-400 rounded hover:bg-gray-600 active:bg-gray-300">Dark Mode</button>
      <div className={`box ${darkmode} bg-white w-[100px] h-[100px] my-2`}></div>
    </main>
  );
}
