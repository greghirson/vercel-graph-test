
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-06 18:00:00", "b": 408.0}, {"a": "2025-04-06 18:05:00", "b": 406.5}, {"a": "2025-04-06 18:10:00", "b": 407.0}, {"a": "2025-04-06 18:15:00", "b": 408.0}, {"a": "2025-04-06 18:20:00", "b": 407.3333333333333}, {"a": "2025-04-06 18:25:00", "b": 408.5}, {"a": "2025-04-06 18:30:00", "b": 408.0}, {"a": "2025-04-06 18:35:00", "b": 421.0}, {"a": "2025-04-06 18:40:00", "b": 427.2}, {"a": "2025-04-06 18:45:00", "b": 433.0}, {"a": "2025-04-06 18:50:00", "b": 442.2}, {"a": "2025-04-06 18:55:00", "b": 444.0}, {"a": "2025-04-06 19:00:00", "b": 440.5}, {"a": "2025-04-06 19:05:00", "b": 443.2}, {"a": "2025-04-06 19:10:00", "b": 441.3333333333333}, {"a": "2025-04-06 19:15:00", "b": 450.25}, {"a": "2025-04-06 19:20:00", "b": 456.5}, {"a": "2025-04-06 19:25:00", "b": 447.6}, {"a": "2025-04-06 19:30:00", "b": 466.8}, {"a": "2025-04-06 19:35:00", "b": 464.75}, {"a": "2025-04-06 19:40:00", "b": 456.8}, {"a": "2025-04-06 19:45:00", "b": 470.4}, {"a": "2025-04-06 19:50:00", "b": 481.8}, {"a": "2025-04-06 19:55:00", "b": 487.75}, {"a": "2025-04-06 20:00:00", "b": 490.75}, {"a": "2025-04-06 20:05:00", "b": 491.6}, {"a": "2025-04-06 20:10:00", "b": 504.0}, {"a": "2025-04-06 20:15:00", "b": 505.4}, {"a": "2025-04-06 20:20:00", "b": 501.6666666666667}, {"a": "2025-04-06 20:25:00", "b": 509.8}, {"a": "2025-04-06 20:30:00", "b": 531.8}, {"a": "2025-04-06 20:35:00", "b": 579.4}, {"a": "2025-04-06 20:40:00", "b": 635.8}, {"a": "2025-04-06 20:45:00", "b": 838.6}, {"a": "2025-04-06 20:50:00", "b": 827.5}, {"a": "2025-04-06 20:55:00", "b": 1144.6}, {"a": "2025-04-06 21:00:00", "b": 1255.6}, {"a": "2025-04-06 21:05:00", "b": 956.0}, {"a": "2025-04-06 21:10:00", "b": 1075.8}, {"a": "2025-04-06 21:15:00", "b": 1099.25}, {"a": "2025-04-06 21:20:00", "b": 1517.8}, {"a": "2025-04-06 21:25:00", "b": 1511.4}, {"a": "2025-04-06 21:30:00", "b": 1377.4}, {"a": "2025-04-06 21:35:00", "b": 1341.2}, {"a": "2025-04-06 21:40:00", "b": 1260.8}, {"a": "2025-04-06 21:45:00", "b": 1266.6}, {"a": "2025-04-06 21:50:00", "b": 1307.6}, {"a": "2025-04-06 21:55:00", "b": 1343.2}, {"a": "2025-04-06 22:00:00", "b": 1226.8}, {"a": "2025-04-06 22:05:00", "b": 1191.6}, {"a": "2025-04-06 22:10:00", "b": 1164.6}, {"a": "2025-04-06 22:15:00", "b": 1205.0}, {"a": "2025-04-06 22:20:00", "b": 792.4}, {"a": "2025-04-06 22:25:00", "b": 831.6}, {"a": "2025-04-06 22:30:00", "b": 810.6}, {"a": "2025-04-06 22:35:00", "b": 824.6}, {"a": "2025-04-06 22:40:00", "b": 853.4}, {"a": "2025-04-06 22:45:00", "b": 726.2}, {"a": "2025-04-06 22:50:00", "b": 739.4}, {"a": "2025-04-06 22:55:00", "b": 777.0}, {"a": "2025-04-06 23:00:00", "b": 691.8}, {"a": "2025-04-06 23:05:00", "b": 697.5}, {"a": "2025-04-06 23:10:00", "b": 712.0}, {"a": "2025-04-06 23:15:00", "b": 741.4}, {"a": "2025-04-06 23:20:00", "b": 684.0}, {"a": "2025-04-06 23:25:00", "b": 687.8}, {"a": "2025-04-06 23:30:00", "b": 696.0}, {"a": "2025-04-06 23:35:00", "b": 708.0}, {"a": "2025-04-06 23:40:00", "b": 799.0}, {"a": "2025-04-06 23:45:00", "b": 822.0}, {"a": "2025-04-06 23:50:00", "b": 811.2}, {"a": "2025-04-06 23:55:00", "b": 770.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    