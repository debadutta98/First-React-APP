import "./ChartBar.css";
function ChartBar(props) {
    let barfillheight="0%";
    if(props.maxValue>0)
    {
        barfillheight=(Math.round(props.value/props.maxValue)*100)+"%";
    }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillheight, backgroundColor: "red" }}
        ></div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </div>
  );
}
export default ChartBar;
