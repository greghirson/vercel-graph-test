
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-11 00:00:00", "b": 567.5}, {"a": "2024-11-11 00:05:00", "b": 576.0}, {"a": "2024-11-11 00:10:00", "b": 580.5}, {"a": "2024-11-11 00:15:00", "b": 572.0}, {"a": "2024-11-11 00:20:00", "b": 558.0}, {"a": "2024-11-11 00:25:00", "b": 554.5}, {"a": "2024-11-11 00:30:00", "b": 544.75}, {"a": "2024-11-11 00:35:00", "b": 548.6}, {"a": "2024-11-11 00:40:00", "b": 543.6666666666666}, {"a": "2024-11-11 00:45:00", "b": 537.0}, {"a": "2024-11-11 00:50:00", "b": 531.8}, {"a": "2024-11-11 00:55:00", "b": 524.0}, {"a": "2024-11-11 01:00:00", "b": 526.75}, {"a": "2024-11-11 01:05:00", "b": 523.25}, {"a": "2024-11-11 01:10:00", "b": 517.0}, {"a": "2024-11-11 01:15:00", "b": 511.2}, {"a": "2024-11-11 01:20:00", "b": 508.25}, {"a": "2024-11-11 01:25:00", "b": 510.0}, {"a": "2024-11-11 01:30:00", "b": 502.4}, {"a": "2024-11-11 01:35:00", "b": 502.6}, {"a": "2024-11-11 01:40:00", "b": 498.6}, {"a": "2024-11-11 01:45:00", "b": 497.75}, {"a": "2024-11-11 01:50:00", "b": 503.6}, {"a": "2024-11-11 01:55:00", "b": 497.0}, {"a": "2024-11-11 02:00:00", "b": 489.6}, {"a": "2024-11-11 02:05:00", "b": 485.75}, {"a": "2024-11-11 02:10:00", "b": 478.8}, {"a": "2024-11-11 02:15:00", "b": 474.0}, {"a": "2024-11-11 02:20:00", "b": 473.0}, {"a": "2024-11-11 02:25:00", "b": 472.5}, {"a": "2024-11-11 02:30:00", "b": 464.0}, {"a": "2024-11-11 02:35:00", "b": 471.2}, {"a": "2024-11-11 02:40:00", "b": 461.0}, {"a": "2024-11-11 02:45:00", "b": 459.25}, {"a": "2024-11-11 02:50:00", "b": 464.4}, {"a": "2024-11-11 02:55:00", "b": 460.0}, {"a": "2024-11-11 03:00:00", "b": 463.0}, {"a": "2024-11-11 03:05:00", "b": 447.4}, {"a": "2024-11-11 03:10:00", "b": 449.8}, {"a": "2024-11-11 03:15:00", "b": 449.75}, {"a": "2024-11-11 03:20:00", "b": 449.5}, {"a": "2024-11-11 03:25:00", "b": 439.6}, {"a": "2024-11-11 03:30:00", "b": 442.0}, {"a": "2024-11-11 03:35:00", "b": 447.6}, {"a": "2024-11-11 03:40:00", "b": 433.2}, {"a": "2024-11-11 03:45:00", "b": 426.3333333333333}, {"a": "2024-11-11 03:50:00", "b": 433.4}, {"a": "2024-11-11 03:55:00", "b": 434.0}, {"a": "2024-11-11 04:00:00", "b": 423.25}, {"a": "2024-11-11 04:05:00", "b": 422.75}, {"a": "2024-11-11 04:10:00", "b": 427.0}, {"a": "2024-11-11 04:15:00", "b": 418.2}, {"a": "2024-11-11 04:20:00", "b": 420.4}, {"a": "2024-11-11 04:25:00", "b": 440.8}, {"a": "2024-11-11 04:30:00", "b": 420.0}, {"a": "2024-11-11 04:35:00", "b": 418.0}, {"a": "2024-11-11 04:40:00", "b": 412.25}, {"a": "2024-11-11 04:45:00", "b": 409.3333333333333}, {"a": "2024-11-11 04:50:00", "b": 415.0}, {"a": "2024-11-11 04:55:00", "b": 419.75}, {"a": "2024-11-11 05:00:00", "b": 422.6}, {"a": "2024-11-11 05:05:00", "b": 407.75}, {"a": "2024-11-11 05:10:00", "b": 412.4}, {"a": "2024-11-11 05:15:00", "b": 420.0}, {"a": "2024-11-11 05:20:00", "b": 411.5}, {"a": "2024-11-11 05:25:00", "b": 409.3333333333333}, {"a": "2024-11-11 05:30:00", "b": 412.0}, {"a": "2024-11-11 05:35:00", "b": 408.0}, {"a": "2024-11-11 05:40:00", "b": 408.5}, {"a": "2024-11-11 05:45:00", "b": 408.0}, {"a": "2024-11-11 05:50:00", "b": 408.0}, {"a": "2024-11-11 05:55:00", "b": 409.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    