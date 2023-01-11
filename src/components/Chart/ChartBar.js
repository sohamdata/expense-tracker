import "./ChartBar.css"

const ChartBar = (props) => {
    let h = '0%'
    // console.log(props)
    if (props.totalValue > 0) {
        h = Math.round((props.value / props.totalValue) * 100) + '%';
    }
    // console.log(h)

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: h }}
                ></div>
                {/* {console.log(`month=${props.label}, h=${h}`)} */}
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;


