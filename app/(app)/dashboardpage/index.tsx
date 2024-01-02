import axios from "axios";
import { useEffect, useState } from "react";
import { View,Text } from "react-native"
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { displayText, normalText } from "../../util";

const dashboard = () => {

  const [weight, setWeight] = useState([{
    "date" : "2024-01-01 18:29:09",
    "value" : 0
  }]);
  const [foodIntake, setFoodIntake] = useState([{
    "date" : "2024-01-01 18:29:09",
    "value" : 0
  }]);
  const [waterIntake, setWaterIntake] = useState([{
    "date" : "2024-01-01 18:29:09",
    "value" : 0
  }]);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.post('http://107.191.60.115:81/DashBoard/GetWeight',{

    },{
      headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(res => {
      setWeight(res.data.weight)
    })
    .catch(err => console.log(err))

    axios.post('http://107.191.60.115:81/DashBoard/GetWaterIntake',{

  },{
    headers: {
      'Content-Type': 'application/json',
  },
  })
  .then(res => {
    setWaterIntake(res.data.water_intake)
  })
  .catch(err => console.log(err))

  axios.post('http://107.191.60.115:81/DashBoard/GetFoodIntake',{

},{
  headers: {
    'Content-Type': 'application/json',
},
})
.then(res => {
  setFoodIntake(res.data.food_intake)
})
.catch(err => console.log(err))
  },[time
  ])

  const api2data = (api: any[]) => {
    let data = {
      labels: [],
      datasets: [
        {
          data: [],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ]
    }
    api.forEach(each => {
      data.labels.push(each.date.split(" ")[1]);
      data.datasets[0].data.push(each.value);
    })
    return data;
  }

  const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientTo: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientFrom: "white",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0,0,0,1)`,
    barPercentage: 0.5
  };

  return <ScrollView>
      <View style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }}>
    {/* <Text>{JSON.stringify(weight)}</Text> */}
    <Text style={displayText}>Weight</Text>
    <LineChart
      style={{}}
      data={api2data(weight)}
      width={300}
      height={300}
      chartConfig={chartConfig}
      verticalLabelRotation={30}
    />
    <Text style={displayText}>Food Intake</Text>
    <LineChart
      style={{}}
      data={api2data(foodIntake)}
      width={300}
      height={300}
      chartConfig={chartConfig}
      verticalLabelRotation={30}
    />
    <Text style={displayText}>Water Intake</Text>
    <LineChart
      style={{}}
      data={api2data(waterIntake)}
      width={300}
      height={300}
      chartConfig={chartConfig}
      verticalLabelRotation={30}
    />
  </View>
  </ScrollView>
}

export default dashboard;