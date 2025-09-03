export type Project = {
  title: string
  description: string
  tags: string[]
  thumbAlt: string
}

export const projects = [
  {
    title: "Alcohol Detection System (IoT)",
    description: "MQ-3 + Arduino + IoT cloud",
    thumbAlt: "Alcohol detection system IoT project",
    img: "/alcohol-detection-iot-arduino.jpg",
    tags: ["IoT", "Arduino", "Sensors"],
  },
  {
    title: "Solar PV with MPPT (MATLAB)",
    description: "PV array modeling + MPPT control",
    thumbAlt: "Solar PV simulation",
    img: "/matlab-solar-pv-mppt-simulation.jpg",
    tags: ["MATLAB", "PV", "Control"],
  },
  {
    title: "Smart Home Automation",
    description: "Sensors + Arduino + Raspberry Pi",
    thumbAlt: "Smart home automation IoT project",
    img: "/smart-home-automation-iot.jpg",
    tags: ["IoT", "Home Automation", "Raspberry Pi"],
  },
  {
    title: "DC Motor Speed Control",
    description: "PWM control fundamentals",
    thumbAlt: "DC motor speed control project",
    img: "/dc-motor-pwm-control.jpg",
    tags: ["PWM", "Motors", "Control"],
  },
  {
    title: "Fault Detection in Power Lines",
    description: "IoT + GSM alerts",
    thumbAlt: "Fault detection system",
    img: "/fault-detection-power-lines-iot.jpg",
    tags: ["IoT", "GSM", "Power Systems"],
  },
  {
    title: "Smart Energy Meter",
    description: "IoT monitoring & analytics",
    thumbAlt: "Smart energy meter",
    img: "/smart-energy-meter-iot.jpg",
    tags: ["IoT", "Energy", "Analytics"],
  },
  {
    title: "Automatic Street Light System",
    description: "LDR + Arduino",
    thumbAlt: "Automatic street light system",
    img: "/automatic-street-light-system-ldr.jpg",
    tags: ["Arduino", "Sensors", "Automation"],
  },
];
