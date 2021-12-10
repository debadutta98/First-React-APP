import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
    const valueArray=props.dataPoints.map((value)=>{
return value.value;
    })
    const maximum=Math.max(...valueArray);
    return <div className="chart">
        {
            props.dataPoints.map((datapoint)=>{
return (<ChartBar 
key={datapoint.label}
value={datapoint.value}
maxValue={maximum}
label={datapoint.label}
/>)
            })
        }
    </div>
}
export default Chart;