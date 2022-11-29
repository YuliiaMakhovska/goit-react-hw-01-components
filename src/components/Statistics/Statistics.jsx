import {
    StatisticsCard,
    Title,
    StatList,
    StatisticsItem,
    StatText
} from 'components/Statistics/Statistics.styled'
import PropTypes from 'prop-types';

const Statistics = ({ title = 'Upload stats', stats }) => {
    return (<StatisticsCard>
  <Title>{title}</Title>
        <StatList>
            {stats.map(({ id, label, percentage }) =>
                <StatisticsItem key={id}>
        <StatText>{label}</StatText>
        <StatText>{percentage}%</StatText>
                </StatisticsItem>
            )}
  </StatList>
</StatisticsCard>)
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}
export default Statistics;