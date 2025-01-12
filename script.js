
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-12 06:00:00", "b": 401.0}, {"a": "2025-01-12 06:05:00", "b": 402.25}, {"a": "2025-01-12 06:10:00", "b": 402.2}, {"a": "2025-01-12 06:15:00", "b": 401.6}, {"a": "2025-01-12 06:20:00", "b": 401.4}, {"a": "2025-01-12 06:25:00", "b": 402.0}, {"a": "2025-01-12 06:30:00", "b": 402.4}, {"a": "2025-01-12 06:35:00", "b": 401.2}, {"a": "2025-01-12 06:40:00", "b": 401.6666666666667}, {"a": "2025-01-12 06:45:00", "b": 401.75}, {"a": "2025-01-12 06:50:00", "b": 402.5}, {"a": "2025-01-12 06:55:00", "b": 401.6666666666667}, {"a": "2025-01-12 07:00:00", "b": 401.75}, {"a": "2025-01-12 07:05:00", "b": 402.4}, {"a": "2025-01-12 07:10:00", "b": 402.25}, {"a": "2025-01-12 07:15:00", "b": 402.4}, {"a": "2025-01-12 07:20:00", "b": 402.0}, {"a": "2025-01-12 07:25:00", "b": 402.75}, {"a": "2025-01-12 07:30:00", "b": 401.2}, {"a": "2025-01-12 07:35:00", "b": 401.75}, {"a": "2025-01-12 07:40:00", "b": 401.5}, {"a": "2025-01-12 07:45:00", "b": 408.0}, {"a": "2025-01-12 07:50:00", "b": 407.5}, {"a": "2025-01-12 07:55:00", "b": 408.5}, {"a": "2025-01-12 08:00:00", "b": 411.25}, {"a": "2025-01-12 08:05:00", "b": 409.3333333333333}, {"a": "2025-01-12 08:10:00", "b": 406.4}, {"a": "2025-01-12 08:15:00", "b": 407.75}, {"a": "2025-01-12 08:20:00", "b": 408.0}, {"a": "2025-01-12 08:25:00", "b": 409.3333333333333}, {"a": "2025-01-12 08:30:00", "b": 407.0}, {"a": "2025-01-12 08:40:00", "b": 408.0}, {"a": "2025-01-12 08:45:00", "b": 407.0}, {"a": "2025-01-12 08:50:00", "b": 406.0}, {"a": "2025-01-12 08:55:00", "b": 411.0}, {"a": "2025-01-12 09:00:00", "b": 421.0}, {"a": "2025-01-12 09:05:00", "b": 409.5}, {"a": "2025-01-12 09:10:00", "b": 408.0}, {"a": "2025-01-12 09:15:00", "b": 407.0}, {"a": "2025-01-12 09:20:00", "b": 405.0}, {"a": "2025-01-12 09:25:00", "b": 406.0}, {"a": "2025-01-12 09:30:00", "b": 410.0}, {"a": "2025-01-12 09:35:00", "b": 410.0}, {"a": "2025-01-12 09:40:00", "b": 407.0}, {"a": "2025-01-12 09:45:00", "b": 406.0}, {"a": "2025-01-12 09:50:00", "b": 408.0}, {"a": "2025-01-12 09:55:00", "b": 407.5}, {"a": "2025-01-12 10:00:00", "b": 438.8}, {"a": "2025-01-12 10:05:00", "b": 540.0}, {"a": "2025-01-12 10:10:00", "b": 557.0}, {"a": "2025-01-12 10:15:00", "b": 552.3333333333334}, {"a": "2025-01-12 10:20:00", "b": 540.75}, {"a": "2025-01-12 10:25:00", "b": 543.0}, {"a": "2025-01-12 10:30:00", "b": 547.0}, {"a": "2025-01-12 10:35:00", "b": 545.0}, {"a": "2025-01-12 10:40:00", "b": 525.6}, {"a": "2025-01-12 10:45:00", "b": 519.6}, {"a": "2025-01-12 10:50:00", "b": 518.4}, {"a": "2025-01-12 10:55:00", "b": 525.0}, {"a": "2025-01-12 11:00:00", "b": 525.75}, {"a": "2025-01-12 11:05:00", "b": 516.6}, {"a": "2025-01-12 11:10:00", "b": 513.5}, {"a": "2025-01-12 11:15:00", "b": 517.8}, {"a": "2025-01-12 11:20:00", "b": 508.0}, {"a": "2025-01-12 11:25:00", "b": 504.0}, {"a": "2025-01-12 11:30:00", "b": 496.6}, {"a": "2025-01-12 11:35:00", "b": 509.75}, {"a": "2025-01-12 11:40:00", "b": 507.2}, {"a": "2025-01-12 11:45:00", "b": 490.6}, {"a": "2025-01-12 11:50:00", "b": 513.0}, {"a": "2025-01-12 11:55:00", "b": 507.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    