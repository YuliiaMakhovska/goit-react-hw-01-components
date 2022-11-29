import {
    TransactionBox,
    TransactionTable,
    Thead,
    Tbody
} from "./TransactionHistory.styled"
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (<TransactionBox>
        <TransactionTable>
          <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </Thead>
            
            <Tbody>
                {items.map(({ id, type, amount, currency }) =>
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>)}
            </Tbody>
        </TransactionTable> 
    </TransactionBox>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
export default TransactionHistory;