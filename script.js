
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-06 01:00:00", "b": 533.8}, {"a": "2025-03-06 01:05:00", "b": 534.25}, {"a": "2025-03-06 01:10:00", "b": 524.8}, {"a": "2025-03-06 01:15:00", "b": 531.4}, {"a": "2025-03-06 01:20:00", "b": 540.6}, {"a": "2025-03-06 01:25:00", "b": 523.8}, {"a": "2025-03-06 01:30:00", "b": 508.8}, {"a": "2025-03-06 01:35:00", "b": 501.0}, {"a": "2025-03-06 01:40:00", "b": 496.5}, {"a": "2025-03-06 01:45:00", "b": 504.0}, {"a": "2025-03-06 01:50:00", "b": 504.25}, {"a": "2025-03-06 01:55:00", "b": 501.2}, {"a": "2025-03-06 02:00:00", "b": 504.8}, {"a": "2025-03-06 02:05:00", "b": 504.75}, {"a": "2025-03-06 02:10:00", "b": 503.5}, {"a": "2025-03-06 02:15:00", "b": 507.4}, {"a": "2025-03-06 02:20:00", "b": 494.75}, {"a": "2025-03-06 02:25:00", "b": 484.5}, {"a": "2025-03-06 02:30:00", "b": 493.25}, {"a": "2025-03-06 02:35:00", "b": 487.3333333333333}, {"a": "2025-03-06 02:40:00", "b": 477.0}, {"a": "2025-03-06 02:45:00", "b": 462.0}, {"a": "2025-03-06 02:50:00", "b": 482.4}, {"a": "2025-03-06 02:55:00", "b": 480.25}, {"a": "2025-03-06 03:00:00", "b": 478.0}, {"a": "2025-03-06 03:05:00", "b": 483.6666666666667}, {"a": "2025-03-06 03:10:00", "b": 474.4}, {"a": "2025-03-06 03:15:00", "b": 467.75}, {"a": "2025-03-06 03:20:00", "b": 473.0}, {"a": "2025-03-06 03:25:00", "b": 471.0}, {"a": "2025-03-06 03:30:00", "b": 457.3333333333333}, {"a": "2025-03-06 03:35:00", "b": 458.5}, {"a": "2025-03-06 03:40:00", "b": 457.6}, {"a": "2025-03-06 03:45:00", "b": 450.4}, {"a": "2025-03-06 03:50:00", "b": 464.0}, {"a": "2025-03-06 03:55:00", "b": 473.2}, {"a": "2025-03-06 04:00:00", "b": 495.6}, {"a": "2025-03-06 04:05:00", "b": 514.0}, {"a": "2025-03-06 04:10:00", "b": 507.6}, {"a": "2025-03-06 04:15:00", "b": 502.0}, {"a": "2025-03-06 04:20:00", "b": 492.2}, {"a": "2025-03-06 04:25:00", "b": 494.5}, {"a": "2025-03-06 04:30:00", "b": 501.5}, {"a": "2025-03-06 04:35:00", "b": 493.6}, {"a": "2025-03-06 04:40:00", "b": 502.8}, {"a": "2025-03-06 04:45:00", "b": 495.6}, {"a": "2025-03-06 04:50:00", "b": 489.6}, {"a": "2025-03-06 04:55:00", "b": 491.75}, {"a": "2025-03-06 05:00:00", "b": 484.0}, {"a": "2025-03-06 05:05:00", "b": 479.2}, {"a": "2025-03-06 05:10:00", "b": 478.3333333333333}, {"a": "2025-03-06 05:15:00", "b": 491.4}, {"a": "2025-03-06 05:20:00", "b": 493.8}, {"a": "2025-03-06 05:25:00", "b": 500.4}, {"a": "2025-03-06 05:30:00", "b": 505.0}, {"a": "2025-03-06 05:35:00", "b": 483.2}, {"a": "2025-03-06 05:40:00", "b": 477.2}, {"a": "2025-03-06 05:45:00", "b": 474.8}, {"a": "2025-03-06 05:50:00", "b": 470.8}, {"a": "2025-03-06 05:55:00", "b": 489.6}, {"a": "2025-03-06 06:00:00", "b": 488.4}, {"a": "2025-03-06 06:05:00", "b": 484.25}, {"a": "2025-03-06 06:10:00", "b": 490.0}, {"a": "2025-03-06 06:15:00", "b": 492.25}, {"a": "2025-03-06 06:20:00", "b": 484.8}, {"a": "2025-03-06 06:25:00", "b": 497.25}, {"a": "2025-03-06 06:30:00", "b": 501.6}, {"a": "2025-03-06 06:35:00", "b": 507.4}, {"a": "2025-03-06 06:40:00", "b": 505.0}, {"a": "2025-03-06 06:45:00", "b": 510.8}, {"a": "2025-03-06 06:50:00", "b": 493.0}, {"a": "2025-03-06 06:55:00", "b": 484.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    