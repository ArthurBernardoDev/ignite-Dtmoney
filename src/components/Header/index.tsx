import { useState } from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {

    const [isnewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsnewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsnewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>

                <Modal isOpen={isnewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}