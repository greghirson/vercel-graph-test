
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-07 22:00:00", "b": 510.2}, {"a": "2025-04-07 22:05:00", "b": 499.8}, {"a": "2025-04-07 22:10:00", "b": 488.25}, {"a": "2025-04-07 22:15:00", "b": 493.8}, {"a": "2025-04-07 22:20:00", "b": 498.0}, {"a": "2025-04-07 22:25:00", "b": 497.2}, {"a": "2025-04-07 22:30:00", "b": 494.0}, {"a": "2025-04-07 22:35:00", "b": 489.6666666666667}, {"a": "2025-04-07 22:40:00", "b": 488.25}, {"a": "2025-04-07 22:45:00", "b": 491.2}, {"a": "2025-04-07 22:50:00", "b": 474.2}, {"a": "2025-04-07 22:55:00", "b": 473.4}, {"a": "2025-04-07 23:00:00", "b": 485.6}, {"a": "2025-04-07 23:05:00", "b": 489.5}, {"a": "2025-04-07 23:10:00", "b": 484.8}, {"a": "2025-04-07 23:15:00", "b": 489.25}, {"a": "2025-04-07 23:20:00", "b": 504.0}, {"a": "2025-04-07 23:25:00", "b": 496.0}, {"a": "2025-04-07 23:30:00", "b": 497.0}, {"a": "2025-04-07 23:35:00", "b": 507.5}, {"a": "2025-04-07 23:40:00", "b": 507.4}, {"a": "2025-04-07 23:45:00", "b": 495.6666666666667}, {"a": "2025-04-07 23:50:00", "b": 494.75}, {"a": "2025-04-07 23:55:00", "b": 492.0}, {"a": "2025-04-08 00:00:00", "b": 488.5}, {"a": "2025-04-08 00:05:00", "b": 493.6666666666667}, {"a": "2025-04-08 00:10:00", "b": 493.8}, {"a": "2025-04-08 00:15:00", "b": 504.0}, {"a": "2025-04-08 00:20:00", "b": 494.0}, {"a": "2025-04-08 00:25:00", "b": 496.6}, {"a": "2025-04-08 00:30:00", "b": 490.2}, {"a": "2025-04-08 00:35:00", "b": 482.3333333333333}, {"a": "2025-04-08 00:40:00", "b": 488.0}, {"a": "2025-04-08 00:45:00", "b": 490.2}, {"a": "2025-04-08 00:50:00", "b": 477.5}, {"a": "2025-04-08 00:55:00", "b": 469.6666666666667}, {"a": "2025-04-08 01:00:00", "b": 470.8}, {"a": "2025-04-08 01:05:00", "b": 479.2}, {"a": "2025-04-08 01:10:00", "b": 471.75}, {"a": "2025-04-08 01:15:00", "b": 471.6}, {"a": "2025-04-08 01:20:00", "b": 475.0}, {"a": "2025-04-08 01:25:00", "b": 471.6666666666667}, {"a": "2025-04-08 01:30:00", "b": 460.4}, {"a": "2025-04-08 01:35:00", "b": 464.0}, {"a": "2025-04-08 01:40:00", "b": 466.5}, {"a": "2025-04-08 01:45:00", "b": 463.25}, {"a": "2025-04-08 01:50:00", "b": 463.0}, {"a": "2025-04-08 01:55:00", "b": 459.6}, {"a": "2025-04-08 02:00:00", "b": 463.75}, {"a": "2025-04-08 02:05:00", "b": 456.0}, {"a": "2025-04-08 02:10:00", "b": 461.6666666666667}, {"a": "2025-04-08 02:15:00", "b": 461.6666666666667}, {"a": "2025-04-08 02:20:00", "b": 462.5}, {"a": "2025-04-08 02:25:00", "b": 463.25}, {"a": "2025-04-08 02:30:00", "b": 458.25}, {"a": "2025-04-08 02:35:00", "b": 450.6}, {"a": "2025-04-08 02:40:00", "b": 452.0}, {"a": "2025-04-08 02:45:00", "b": 447.4}, {"a": "2025-04-08 02:50:00", "b": 450.0}, {"a": "2025-04-08 02:55:00", "b": 467.8}, {"a": "2025-04-08 03:00:00", "b": 463.2}, {"a": "2025-04-08 03:05:00", "b": 429.75}, {"a": "2025-04-08 03:10:00", "b": 431.75}, {"a": "2025-04-08 03:15:00", "b": 451.5}, {"a": "2025-04-08 03:20:00", "b": 461.6}, {"a": "2025-04-08 03:25:00", "b": 458.5}, {"a": "2025-04-08 03:30:00", "b": 454.8}, {"a": "2025-04-08 03:35:00", "b": 441.2}, {"a": "2025-04-08 03:40:00", "b": 441.8}, {"a": "2025-04-08 03:45:00", "b": 456.75}, {"a": "2025-04-08 03:50:00", "b": 462.8}, {"a": "2025-04-08 03:55:00", "b": 458.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    