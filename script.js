
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-27 00:00:00", "b": 431.0}, {"a": "2024-11-27 00:05:00", "b": 414.5}, {"a": "2024-11-27 00:10:00", "b": 445.6}, {"a": "2024-11-27 00:15:00", "b": 456.4}, {"a": "2024-11-27 00:20:00", "b": 521.4}, {"a": "2024-11-27 00:25:00", "b": 461.25}, {"a": "2024-11-27 00:30:00", "b": 450.4}, {"a": "2024-11-27 00:35:00", "b": 522.4}, {"a": "2024-11-27 00:40:00", "b": 553.4}, {"a": "2024-11-27 00:45:00", "b": 445.6}, {"a": "2024-11-27 00:50:00", "b": 474.8}, {"a": "2024-11-27 00:55:00", "b": 585.2}, {"a": "2024-11-27 01:00:00", "b": 494.8}, {"a": "2024-11-27 01:05:00", "b": 558.0}, {"a": "2024-11-27 01:10:00", "b": 548.6}, {"a": "2024-11-27 01:15:00", "b": 733.8}, {"a": "2024-11-27 01:20:00", "b": 485.4}, {"a": "2024-11-27 01:25:00", "b": 485.2}, {"a": "2024-11-27 01:30:00", "b": 461.2}, {"a": "2024-11-27 01:35:00", "b": 516.2}, {"a": "2024-11-27 01:40:00", "b": 456.0}, {"a": "2024-11-27 01:45:00", "b": 493.0}, {"a": "2024-11-27 01:50:00", "b": 513.6}, {"a": "2024-11-27 01:55:00", "b": 543.8}, {"a": "2024-11-27 02:00:00", "b": 471.4}, {"a": "2024-11-27 02:05:00", "b": 481.4}, {"a": "2024-11-27 02:10:00", "b": 540.0}, {"a": "2024-11-27 02:15:00", "b": 498.6}, {"a": "2024-11-27 02:20:00", "b": 476.0}, {"a": "2024-11-27 02:25:00", "b": 448.2}, {"a": "2024-11-27 02:30:00", "b": 519.6}, {"a": "2024-11-27 02:35:00", "b": 470.2}, {"a": "2024-11-27 02:40:00", "b": 494.4}, {"a": "2024-11-27 02:45:00", "b": 571.0}, {"a": "2024-11-27 02:50:00", "b": 502.2}, {"a": "2024-11-27 02:55:00", "b": 448.75}, {"a": "2024-11-27 03:00:00", "b": 466.8}, {"a": "2024-11-27 03:05:00", "b": 492.8}, {"a": "2024-11-27 03:10:00", "b": 488.4}, {"a": "2024-11-27 03:15:00", "b": 481.0}, {"a": "2024-11-27 03:20:00", "b": 462.8}, {"a": "2024-11-27 03:25:00", "b": 530.8}, {"a": "2024-11-27 03:30:00", "b": 535.6}, {"a": "2024-11-27 03:35:00", "b": 450.0}, {"a": "2024-11-27 03:40:00", "b": 420.4}, {"a": "2024-11-27 03:45:00", "b": 433.25}, {"a": "2024-11-27 03:50:00", "b": 436.6}, {"a": "2024-11-27 03:55:00", "b": 407.5}, {"a": "2024-11-27 04:00:00", "b": 408.0}, {"a": "2024-11-27 04:05:00", "b": 423.25}, {"a": "2024-11-27 04:10:00", "b": 423.2}, {"a": "2024-11-27 04:15:00", "b": 407.6666666666667}, {"a": "2024-11-27 04:20:00", "b": 411.0}, {"a": "2024-11-27 04:25:00", "b": 419.8}, {"a": "2024-11-27 04:30:00", "b": 409.25}, {"a": "2024-11-27 04:35:00", "b": 415.0}, {"a": "2024-11-27 04:40:00", "b": 494.8}, {"a": "2024-11-27 04:45:00", "b": 475.2}, {"a": "2024-11-27 04:50:00", "b": 462.2}, {"a": "2024-11-27 04:55:00", "b": 447.75}, {"a": "2024-11-27 05:00:00", "b": 420.2}, {"a": "2024-11-27 05:05:00", "b": 409.4}, {"a": "2024-11-27 05:10:00", "b": 424.2}, {"a": "2024-11-27 05:15:00", "b": 409.6666666666667}, {"a": "2024-11-27 05:20:00", "b": 423.25}, {"a": "2024-11-27 05:25:00", "b": 442.4}, {"a": "2024-11-27 05:30:00", "b": 444.4}, {"a": "2024-11-27 05:35:00", "b": 512.0}, {"a": "2024-11-27 05:40:00", "b": 452.8}, {"a": "2024-11-27 05:45:00", "b": 444.8}, {"a": "2024-11-27 05:50:00", "b": 433.2}, {"a": "2024-11-27 05:55:00", "b": 455.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    