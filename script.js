
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-20 13:00:00", "b": 403.5}, {"a": "2024-12-20 13:05:00", "b": 405.0}, {"a": "2024-12-20 13:10:00", "b": 403.75}, {"a": "2024-12-20 13:15:00", "b": 402.6666666666667}, {"a": "2024-12-20 13:20:00", "b": 401.25}, {"a": "2024-12-20 13:25:00", "b": 402.25}, {"a": "2024-12-20 13:30:00", "b": 402.25}, {"a": "2024-12-20 13:35:00", "b": 402.5}, {"a": "2024-12-20 13:40:00", "b": 403.5}, {"a": "2024-12-20 13:45:00", "b": 402.6666666666667}, {"a": "2024-12-20 13:50:00", "b": 402.25}, {"a": "2024-12-20 13:55:00", "b": 401.25}, {"a": "2024-12-20 14:00:00", "b": 402.0}, {"a": "2024-12-20 14:05:00", "b": 401.8}, {"a": "2024-12-20 14:10:00", "b": 401.25}, {"a": "2024-12-20 14:15:00", "b": 403.0}, {"a": "2024-12-20 14:20:00", "b": 402.0}, {"a": "2024-12-20 14:25:00", "b": 401.5}, {"a": "2024-12-20 14:30:00", "b": 402.5}, {"a": "2024-12-20 14:35:00", "b": 402.25}, {"a": "2024-12-20 14:40:00", "b": 402.0}, {"a": "2024-12-20 14:45:00", "b": 401.75}, {"a": "2024-12-20 14:50:00", "b": 402.25}, {"a": "2024-12-20 14:55:00", "b": 401.5}, {"a": "2024-12-20 15:00:00", "b": 402.3333333333333}, {"a": "2024-12-20 15:05:00", "b": 402.3333333333333}, {"a": "2024-12-20 15:10:00", "b": 402.0}, {"a": "2024-12-20 15:15:00", "b": 401.4}, {"a": "2024-12-20 15:20:00", "b": 401.6666666666667}, {"a": "2024-12-20 15:25:00", "b": 405.25}, {"a": "2024-12-20 15:30:00", "b": 406.75}, {"a": "2024-12-20 15:35:00", "b": 405.0}, {"a": "2024-12-20 15:40:00", "b": 402.5}, {"a": "2024-12-20 15:45:00", "b": 402.5}, {"a": "2024-12-20 15:50:00", "b": 405.0}, {"a": "2024-12-20 15:55:00", "b": 425.4}, {"a": "2024-12-20 16:00:00", "b": 444.75}, {"a": "2024-12-20 16:05:00", "b": 448.6}, {"a": "2024-12-20 16:10:00", "b": 485.2}, {"a": "2024-12-20 16:15:00", "b": 478.0}, {"a": "2024-12-20 16:20:00", "b": 470.8}, {"a": "2024-12-20 16:25:00", "b": 431.0}, {"a": "2024-12-20 16:30:00", "b": 402.5}, {"a": "2024-12-20 16:35:00", "b": 402.6666666666667}, {"a": "2024-12-20 16:40:00", "b": 402.6666666666667}, {"a": "2024-12-20 16:45:00", "b": 403.75}, {"a": "2024-12-20 16:50:00", "b": 410.6666666666667}, {"a": "2024-12-20 16:55:00", "b": 424.2}, {"a": "2024-12-20 17:00:00", "b": 431.25}, {"a": "2024-12-20 17:05:00", "b": 421.0}, {"a": "2024-12-20 17:10:00", "b": 434.4}, {"a": "2024-12-20 17:15:00", "b": 475.8}, {"a": "2024-12-20 17:20:00", "b": 483.6}, {"a": "2024-12-20 17:25:00", "b": 454.5}, {"a": "2024-12-20 17:30:00", "b": 441.0}, {"a": "2024-12-20 17:35:00", "b": 439.2}, {"a": "2024-12-20 17:40:00", "b": 450.0}, {"a": "2024-12-20 17:45:00", "b": 459.8}, {"a": "2024-12-20 17:50:00", "b": 446.8}, {"a": "2024-12-20 17:55:00", "b": 437.2}, {"a": "2024-12-20 18:00:00", "b": 444.4}, {"a": "2024-12-20 18:05:00", "b": 449.5}, {"a": "2024-12-20 18:10:00", "b": 447.75}, {"a": "2024-12-20 18:15:00", "b": 433.5}, {"a": "2024-12-20 18:20:00", "b": 432.25}, {"a": "2024-12-20 18:25:00", "b": 417.0}, {"a": "2024-12-20 18:30:00", "b": 421.6666666666667}, {"a": "2024-12-20 18:35:00", "b": 426.3333333333333}, {"a": "2024-12-20 18:40:00", "b": 426.25}, {"a": "2024-12-20 18:45:00", "b": 433.0}, {"a": "2024-12-20 18:50:00", "b": 443.2}, {"a": "2024-12-20 18:55:00", "b": 455.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    