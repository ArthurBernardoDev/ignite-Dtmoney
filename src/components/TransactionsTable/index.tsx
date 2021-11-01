import styles from "./TransactionsTable.module.scss";

const TransactionsTable: React.FC = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desevolvimento de website</td>
            <td className={styles.deposit}>R$12.000</td>
            <td>Desevolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className={styles.withdraw}> - R$1200</td>
            <td>Casa</td>
            <td>31/02/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
