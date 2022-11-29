import {
    StatisticsCard,
    Title,
    StatList,
    StatisticsItem,
    StatText
} from 'components/Statistics/Statistics.styled'
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (<StatisticsCard>
        {title && <Title>{title}</Title>}
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
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
export default Statistics;