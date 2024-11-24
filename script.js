
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-23 23:00:00", "b": 534.4}, {"a": "2024-11-23 23:05:00", "b": 520.2}, {"a": "2024-11-23 23:10:00", "b": 504.75}, {"a": "2024-11-23 23:15:00", "b": 495.75}, {"a": "2024-11-23 23:20:00", "b": 484.0}, {"a": "2024-11-23 23:25:00", "b": 485.6}, {"a": "2024-11-23 23:30:00", "b": 483.6}, {"a": "2024-11-23 23:35:00", "b": 484.6}, {"a": "2024-11-23 23:40:00", "b": 478.25}, {"a": "2024-11-23 23:45:00", "b": 469.6}, {"a": "2024-11-23 23:50:00", "b": 470.0}, {"a": "2024-11-23 23:55:00", "b": 464.0}, {"a": "2024-11-24 00:00:00", "b": 462.2}, {"a": "2024-11-24 00:05:00", "b": 446.8}, {"a": "2024-11-24 00:10:00", "b": 449.0}, {"a": "2024-11-24 00:15:00", "b": 442.6}, {"a": "2024-11-24 00:20:00", "b": 442.6666666666667}, {"a": "2024-11-24 00:25:00", "b": 436.8}, {"a": "2024-11-24 00:30:00", "b": 434.4}, {"a": "2024-11-24 00:35:00", "b": 469.8}, {"a": "2024-11-24 00:40:00", "b": 493.0}, {"a": "2024-11-24 00:45:00", "b": 436.4}, {"a": "2024-11-24 00:50:00", "b": 442.6}, {"a": "2024-11-24 00:55:00", "b": 430.6}, {"a": "2024-11-24 01:00:00", "b": 405.4}, {"a": "2024-11-24 01:05:00", "b": 407.4}, {"a": "2024-11-24 01:10:00", "b": 405.5}, {"a": "2024-11-24 01:15:00", "b": 405.0}, {"a": "2024-11-24 01:20:00", "b": 406.0}, {"a": "2024-11-24 01:25:00", "b": 404.5}, {"a": "2024-11-24 01:30:00", "b": 404.0}, {"a": "2024-11-24 01:35:00", "b": 407.0}, {"a": "2024-11-24 01:40:00", "b": 408.0}, {"a": "2024-11-24 01:45:00", "b": 407.0}, {"a": "2024-11-24 01:50:00", "b": 405.0}, {"a": "2024-11-24 01:55:00", "b": 405.0}, {"a": "2024-11-24 02:00:00", "b": 406.5}, {"a": "2024-11-24 02:05:00", "b": 406.6666666666667}, {"a": "2024-11-24 02:10:00", "b": 406.3333333333333}, {"a": "2024-11-24 02:15:00", "b": 406.0}, {"a": "2024-11-24 02:20:00", "b": 406.75}, {"a": "2024-11-24 02:25:00", "b": 478.0}, {"a": "2024-11-24 02:30:00", "b": 462.0}, {"a": "2024-11-24 02:35:00", "b": 404.75}, {"a": "2024-11-24 02:40:00", "b": 404.5}, {"a": "2024-11-24 02:45:00", "b": 403.0}, {"a": "2024-11-24 02:50:00", "b": 402.0}, {"a": "2024-11-24 02:55:00", "b": 403.5}, {"a": "2024-11-24 03:00:00", "b": 402.75}, {"a": "2024-11-24 03:05:00", "b": 402.3333333333333}, {"a": "2024-11-24 03:10:00", "b": 402.25}, {"a": "2024-11-24 03:15:00", "b": 401.5}, {"a": "2024-11-24 03:20:00", "b": 403.5}, {"a": "2024-11-24 03:25:00", "b": 402.5}, {"a": "2024-11-24 03:30:00", "b": 402.5}, {"a": "2024-11-24 03:35:00", "b": 401.0}, {"a": "2024-11-24 03:40:00", "b": 401.75}, {"a": "2024-11-24 03:45:00", "b": 401.5}, {"a": "2024-11-24 03:50:00", "b": 403.0}, {"a": "2024-11-24 03:55:00", "b": 402.0}, {"a": "2024-11-24 04:00:00", "b": 402.0}, {"a": "2024-11-24 04:05:00", "b": 402.8}, {"a": "2024-11-24 04:10:00", "b": 422.8}, {"a": "2024-11-24 04:15:00", "b": 412.25}, {"a": "2024-11-24 04:20:00", "b": 403.0}, {"a": "2024-11-24 04:25:00", "b": 402.5}, {"a": "2024-11-24 04:30:00", "b": 402.75}, {"a": "2024-11-24 04:35:00", "b": 402.4}, {"a": "2024-11-24 04:40:00", "b": 402.0}, {"a": "2024-11-24 04:45:00", "b": 401.4}, {"a": "2024-11-24 04:50:00", "b": 402.0}, {"a": "2024-11-24 04:55:00", "b": 402.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    