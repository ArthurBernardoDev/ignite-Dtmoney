import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface transaction {
    id: number;
    title: string;
    amount: string;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transactions => {
                        return (
                            <tr key={transactions.id}>
                                <td>
                                    {transactions.title}
                                </td>
                                <td className={transactions.type}>
                                    {transactions.amount}
                                </td>
                                <td>
                                    {transactions.category}
                                </td>
                                <td>
                                    {transactions.createdAt}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </Container>
    );
}