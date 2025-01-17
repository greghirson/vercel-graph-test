
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-16 14:00:00", "b": 402.5}, {"a": "2025-01-16 14:05:00", "b": 402.5}, {"a": "2025-01-16 14:10:00", "b": 401.0}, {"a": "2025-01-16 14:15:00", "b": 402.4}, {"a": "2025-01-16 14:20:00", "b": 401.6666666666667}, {"a": "2025-01-16 14:25:00", "b": 400.75}, {"a": "2025-01-16 14:30:00", "b": 402.5}, {"a": "2025-01-16 14:35:00", "b": 401.0}, {"a": "2025-01-16 14:40:00", "b": 401.0}, {"a": "2025-01-16 14:45:00", "b": 402.0}, {"a": "2025-01-16 14:50:00", "b": 401.4}, {"a": "2025-01-16 14:55:00", "b": 401.75}, {"a": "2025-01-16 15:00:00", "b": 401.0}, {"a": "2025-01-16 15:05:00", "b": 402.0}, {"a": "2025-01-16 15:10:00", "b": 400.75}, {"a": "2025-01-16 15:15:00", "b": 402.25}, {"a": "2025-01-16 15:20:00", "b": 401.6666666666667}, {"a": "2025-01-16 15:25:00", "b": 402.8}, {"a": "2025-01-16 15:30:00", "b": 401.75}, {"a": "2025-01-16 15:35:00", "b": 402.0}, {"a": "2025-01-16 15:40:00", "b": 401.8}, {"a": "2025-01-16 15:45:00", "b": 401.5}, {"a": "2025-01-16 15:50:00", "b": 402.5}, {"a": "2025-01-16 15:55:00", "b": 402.0}, {"a": "2025-01-16 16:00:00", "b": 402.25}, {"a": "2025-01-16 16:05:00", "b": 402.0}, {"a": "2025-01-16 16:10:00", "b": 401.75}, {"a": "2025-01-16 16:15:00", "b": 401.4}, {"a": "2025-01-16 16:20:00", "b": 400.5}, {"a": "2025-01-16 16:25:00", "b": 402.25}, {"a": "2025-01-16 16:30:00", "b": 401.75}, {"a": "2025-01-16 16:35:00", "b": 402.0}, {"a": "2025-01-16 16:40:00", "b": 402.5}, {"a": "2025-01-16 16:45:00", "b": 402.75}, {"a": "2025-01-16 16:50:00", "b": 402.2}, {"a": "2025-01-16 16:55:00", "b": 401.75}, {"a": "2025-01-16 17:00:00", "b": 402.0}, {"a": "2025-01-16 17:05:00", "b": 402.4}, {"a": "2025-01-16 17:10:00", "b": 402.25}, {"a": "2025-01-16 17:15:00", "b": 402.8}, {"a": "2025-01-16 17:20:00", "b": 401.3333333333333}, {"a": "2025-01-16 17:25:00", "b": 402.3333333333333}, {"a": "2025-01-16 17:30:00", "b": 401.6666666666667}, {"a": "2025-01-16 17:35:00", "b": 405.5}, {"a": "2025-01-16 17:40:00", "b": 405.5}, {"a": "2025-01-16 17:45:00", "b": 406.5}, {"a": "2025-01-16 17:55:00", "b": 409.0}, {"a": "2025-01-16 18:00:00", "b": 408.75}, {"a": "2025-01-16 18:05:00", "b": 408.6666666666667}, {"a": "2025-01-16 18:10:00", "b": 410.0}, {"a": "2025-01-16 18:15:00", "b": 408.0}, {"a": "2025-01-16 18:20:00", "b": 407.25}, {"a": "2025-01-16 18:25:00", "b": 407.6}, {"a": "2025-01-16 18:30:00", "b": 407.0}, {"a": "2025-01-16 18:35:00", "b": 412.75}, {"a": "2025-01-16 18:40:00", "b": 431.6}, {"a": "2025-01-16 18:45:00", "b": 449.5}, {"a": "2025-01-16 18:50:00", "b": 442.0}, {"a": "2025-01-16 18:55:00", "b": 435.0}, {"a": "2025-01-16 19:00:00", "b": 490.8}, {"a": "2025-01-16 19:05:00", "b": 559.0}, {"a": "2025-01-16 19:10:00", "b": 576.2}, {"a": "2025-01-16 19:15:00", "b": 597.4}, {"a": "2025-01-16 19:20:00", "b": 648.0}, {"a": "2025-01-16 19:25:00", "b": 678.2}, {"a": "2025-01-16 19:30:00", "b": 672.0}, {"a": "2025-01-16 19:35:00", "b": 676.0}, {"a": "2025-01-16 19:40:00", "b": 673.25}, {"a": "2025-01-16 19:45:00", "b": 663.2}, {"a": "2025-01-16 19:50:00", "b": 663.4}, {"a": "2025-01-16 19:55:00", "b": 660.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    