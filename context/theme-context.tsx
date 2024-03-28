"use client"

import React,{createContext,useState,useContext} from 'react'


type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type Theme = boolean ;

type ThemeContext = {
    hideHeader: Theme ;
    setHideHeader: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContext | null>(null)

export default function ThemeContextProvider({children}:ThemeContextProviderProps) {
    const [hideHeader, setHideHeader] = useState<Theme>(false)

    
      return (
        <ThemeContext.Provider 
            value={{hideHeader,setHideHeader}}>
                
                {children}

        </ThemeContext.Provider>
  )
}


export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within a ThemeContextProvider");
    }
    return context;
}