export default {
  nodes: [
    { id: 7, text: "连续活跃5周及以上", color: "#e9462f", x: "350", y: "600" },
    {
      id: 9,
      text: "最近一周流失",
      color: "#a6d787",
      textColor: "#4b7937",
      x: "350",
      y: "510"
    },
    { id: 10, text: "连续2周流失", color: "#89bb6c", x: "350", y: "420" },
    { id: 6, text: "连续4周活跃", color: "#f75f48", x: "600", y: "250" },
    { id: 11, text: "连续3周流失", color: "#6ea454", x: "350", y: "330" },
    {
      id: 5,
      text: "连续3周活跃",
      color: "#ff7c67",
      x: "600",
      y: "150",
      width: "160"
    },
    {
      id: 2,
      text: "最近一周新增用户",
      color: "#ffdd78",
      textColor: "#d69e47",
      x: "70",
      y: "260"
    },
    { id: 13, text: "连续5周以上流失", color: "#3b6629", x: "350", y: "150" },
    { id: 4, text: "连续2周活跃用户", color: "#ff7f3f", x: "350", y: "30" },
    { id: 12, text: "连续4周流失", color: "#5a8743", x: "350", y: "240" },
    { id: 3, text: "最近一周回流用户", color: "#66b0f3", x: "180", y: "210" }
  ],
  links: [
    { to: 9, text: "9.32%", from: 7, offset: "0 -30 0 15", color: "#a7d888" },
    { to: 10, text: "81.95%", from: 9, offset: "0 -30 0 15", color: "#80b864" },
    {
      to: 11,
      text: "89.495%",
      from: 10,
      offset: "0 -30 0 15",
      color: "#6ca352"
    },
    { to: 9, text: "19.88%", from: 6, color: "green", offset: "-10 20 70 0" },
    { to: 7, text: "80.119995%", from: 6, offset: "10 20 75 -10" },
    {
      to: 3,
      text: "10.505%",
      from: 10,
      clockwise: "1",
      color: "#64aff2",
      offset: "-70 -10 0 20"
    },
    {
      to: 3,
      text: "6.985%",
      clockwise: "1",
      from: 11,
      color: "#64aff2",
      offset: "-70 -10 15 20"
    },
    { to: 9, text: "27.73%", from: 5, color: "green", offset: "-70 15 70 -10" },
    {
      to: 9,
      text: "53.879997%",
      from: 2,
      color: "green",
      offset: "0 20 -70 0"
    },
    {
      to: 3,
      text: "1.6949999%",
      from: 13,
      color: "#64aff2",
      offset: "-70 -10 0 -35",
      clockwise: "0"
    },
    { to: 13, text: "98.305%", from: 13, color: "#2d4a19" },
    {
      to: 9,
      text: "38.415%",
      loc: "450 30,450 490",
      from: 4,
      offset: "70 0 70 -20",
      color: "#6ca251",
      clockwise: "1"
    },
    { to: 6, text: "72.27%", line: "2px", from: 5, offset: "0 15 0 -35" },
    {
      to: 13,
      text: "94.765%",
      line: "2px",
      from: 12,
      offset: "0 -30 0 18",
      color: "#588540"
    },
    { to: 4, text: "46.120003%", from: 2, offset: "0 -30 -70 -15" },
    { to: 5, text: "61.585%", from: 4, clockwise: "1", offset: "70 -10 0 -35" },
    {
      to: 3,
      text: "18.05%",
      from: 9,
      clockwise: "1",
      color: "#63aff4",
      offset: "-70 -20 -20 20"
    },
    {
      to: 3,
      text: "5.235%",
      clockwise: "1",
      color: "#63aff4",
      from: 12,
      offset: "-65 0 70 -10"
    },
    {
      to: 9,
      text: "62.995%",
      from: 3,
      color: "#62944b",
      offset: "-40 20 -70 -10"
    },
    {
      to: 12,
      text: "93.015%",
      from: 11,
      offset: "0 -30 0 20",
      color: "#578641"
    },
    { to: 7, text: "90.68%", line: "2px", revert: true, from: 7 },
    { to: 4, text: "37.005%", from: 3, offset: "-10 -30 -70" }
  ]
};
