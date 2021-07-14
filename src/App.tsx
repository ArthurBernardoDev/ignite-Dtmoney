import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransaction';

Modal.setAppElement('#root')

export function App() {

  const [isnewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsnewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsnewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider >

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isnewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
