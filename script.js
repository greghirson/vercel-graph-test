
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-16 13:00:00", "b": 466.25}, {"a": "2025-03-16 13:05:00", "b": 458.5}, {"a": "2025-03-16 13:10:00", "b": 461.25}, {"a": "2025-03-16 13:15:00", "b": 461.6666666666667}, {"a": "2025-03-16 13:20:00", "b": 474.0}, {"a": "2025-03-16 13:25:00", "b": 455.0}, {"a": "2025-03-16 13:30:00", "b": 442.4}, {"a": "2025-03-16 13:35:00", "b": 455.75}, {"a": "2025-03-16 13:40:00", "b": 445.0}, {"a": "2025-03-16 13:45:00", "b": 438.2}, {"a": "2025-03-16 13:50:00", "b": 436.25}, {"a": "2025-03-16 13:55:00", "b": 445.0}, {"a": "2025-03-16 14:00:00", "b": 434.25}, {"a": "2025-03-16 14:05:00", "b": 447.0}, {"a": "2025-03-16 14:10:00", "b": 447.75}, {"a": "2025-03-16 14:15:00", "b": 449.0}, {"a": "2025-03-16 14:20:00", "b": 456.75}, {"a": "2025-03-16 14:25:00", "b": 456.0}, {"a": "2025-03-16 14:30:00", "b": 465.5}, {"a": "2025-03-16 14:35:00", "b": 512.8}, {"a": "2025-03-16 14:40:00", "b": 528.5}, {"a": "2025-03-16 14:45:00", "b": 537.4}, {"a": "2025-03-16 14:50:00", "b": 541.5}, {"a": "2025-03-16 14:55:00", "b": 544.0}, {"a": "2025-03-16 15:00:00", "b": 548.6}, {"a": "2025-03-16 15:05:00", "b": 545.5}, {"a": "2025-03-16 15:10:00", "b": 541.0}, {"a": "2025-03-16 15:15:00", "b": 544.0}, {"a": "2025-03-16 15:20:00", "b": 540.25}, {"a": "2025-03-16 15:25:00", "b": 539.25}, {"a": "2025-03-16 15:30:00", "b": 532.8}, {"a": "2025-03-16 15:35:00", "b": 530.0}, {"a": "2025-03-16 15:40:00", "b": 534.2}, {"a": "2025-03-16 15:45:00", "b": 532.2}, {"a": "2025-03-16 15:50:00", "b": 539.0}, {"a": "2025-03-16 15:55:00", "b": 520.0}, {"a": "2025-03-16 16:00:00", "b": 518.0}, {"a": "2025-03-16 16:05:00", "b": 489.5}, {"a": "2025-03-16 16:10:00", "b": 467.25}, {"a": "2025-03-16 16:15:00", "b": 455.6666666666667}, {"a": "2025-03-16 16:20:00", "b": 462.5}, {"a": "2025-03-16 16:25:00", "b": 467.4}, {"a": "2025-03-16 16:30:00", "b": 465.25}, {"a": "2025-03-16 16:35:00", "b": 467.4}, {"a": "2025-03-16 16:40:00", "b": 472.2}, {"a": "2025-03-16 16:45:00", "b": 488.25}, {"a": "2025-03-16 16:50:00", "b": 499.25}, {"a": "2025-03-16 16:55:00", "b": 504.6}, {"a": "2025-03-16 17:00:00", "b": 502.4}, {"a": "2025-03-16 17:05:00", "b": 508.3333333333333}, {"a": "2025-03-16 17:10:00", "b": 508.4}, {"a": "2025-03-16 17:15:00", "b": 520.6}, {"a": "2025-03-16 17:20:00", "b": 534.5}, {"a": "2025-03-16 17:25:00", "b": 533.8}, {"a": "2025-03-16 17:30:00", "b": 527.2}, {"a": "2025-03-16 17:35:00", "b": 525.0}, {"a": "2025-03-16 17:40:00", "b": 530.5}, {"a": "2025-03-16 17:45:00", "b": 519.2}, {"a": "2025-03-16 17:50:00", "b": 527.75}, {"a": "2025-03-16 17:55:00", "b": 514.8}, {"a": "2025-03-16 18:00:00", "b": 515.25}, {"a": "2025-03-16 18:05:00", "b": 512.8}, {"a": "2025-03-16 18:10:00", "b": 510.4}, {"a": "2025-03-16 18:15:00", "b": 499.75}, {"a": "2025-03-16 18:20:00", "b": 504.6666666666667}, {"a": "2025-03-16 18:25:00", "b": 503.2}, {"a": "2025-03-16 18:30:00", "b": 534.6}, {"a": "2025-03-16 18:35:00", "b": 552.0}, {"a": "2025-03-16 18:40:00", "b": 546.25}, {"a": "2025-03-16 18:45:00", "b": 554.0}, {"a": "2025-03-16 18:50:00", "b": 539.0}, {"a": "2025-03-16 18:55:00", "b": 513.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    