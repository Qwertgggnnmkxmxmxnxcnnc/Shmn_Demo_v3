import React, { createContext, useContext, useReducer } from 'react';

interface QuickOrderState {
  isOpen: boolean;
}

type QuickOrderAction = { type: 'TOGGLE_QUICK_ORDER' };

const quickOrderReducer = (state: QuickOrderState, action: QuickOrderAction): QuickOrderState => {
  switch (action.type) {
    case 'TOGGLE_QUICK_ORDER':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

const QuickOrderContext = createContext<{
  state: QuickOrderState;
  dispatch: React.Dispatch<QuickOrderAction>;
} | null>(null);

export const QuickOrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quickOrderReducer, {
    isOpen: false,
  });

  return (
    <QuickOrderContext.Provider value={{ state, dispatch }}>
      {children}
    </QuickOrderContext.Provider>
  );
};

export const useQuickOrder = () => {
  const context = useContext(QuickOrderContext);
  if (!context) {
    throw new Error('useQuickOrder must be used within a QuickOrderProvider');
  }
  return context;
};