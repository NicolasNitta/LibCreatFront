import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ApiContextType {

    data: string;
    fetchData: () => Promise<void>;
    redirectTo: (path: string) => void;

}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);
    const navigate = useNavigate();

    const fetchData = async () => {

        try{
            const response = await fetch('youtube.com');
            const result = await response.json();
            setData(result);
        }catch (error) {
            console.log('Erro ao buscar dados', error)
        }

    };

    const redirectTo = (path: string) => {
        navigate(path);
        window.location.reload();
    }

    return (
        <ApiContext.Provider value={{ data, fetchData, redirectTo }}>
            {children}
        </ApiContext.Provider>
    );

};

export const useApiContext = () => {
    const context = useContext(ApiContext);
    if(!context) {
        throw new Error('useApiContext deve ser usado dentro de um ApiProvider')
    }
    return context;
};