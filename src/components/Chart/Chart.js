import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // console.log(dataPointValues)
    // const maxVal = Math.max(...dataPointValues)
    const sum = dataPointValues.reduce((acc, val) => acc + val, 0);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    totalValue={sum}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}

export default Chart;