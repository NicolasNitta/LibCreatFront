import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Usuario {
    nickname: string;
    senha: string; // Se necessário, você pode adicionar outros campos
}

interface ApiContextType {
    data: string;
    usuario: Usuario | null;
    fetchData: () => Promise<void>;
    redirectTo: (path: string) => void;
    getUsuario: () => Usuario | null;
    setUsuario: (usuario: Usuario) => void;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);
    const [usuario, setUsuario] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch('youtube.com');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log('Erro ao buscar dados', error);
        }
    };

    const redirectTo = (path: string) => {
        navigate(path);
    };

    const getUsuario = () => {
        return usuario;
    };

    const updateUsuario = (usuario: Usuario) => {
        setUsuario(usuario);
    };

    return (
        <ApiContext.Provider value={{ data, usuario, fetchData, redirectTo, getUsuario, setUsuario: updateUsuario }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApiContext = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApiContext deve ser usado dentro de um ApiProvider');
    }
    return context;
};