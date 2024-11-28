
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-28 08:00:00", "b": 575.0}, {"a": "2024-11-28 08:05:00", "b": 600.6}, {"a": "2024-11-28 08:10:00", "b": 611.4}, {"a": "2024-11-28 08:15:00", "b": 597.8}, {"a": "2024-11-28 08:20:00", "b": 623.8}, {"a": "2024-11-28 08:25:00", "b": 587.8}, {"a": "2024-11-28 08:30:00", "b": 544.6}, {"a": "2024-11-28 08:35:00", "b": 485.0}, {"a": "2024-11-28 08:40:00", "b": 479.8}, {"a": "2024-11-28 08:45:00", "b": 508.2}, {"a": "2024-11-28 08:50:00", "b": 492.2}, {"a": "2024-11-28 08:55:00", "b": 501.75}, {"a": "2024-11-28 09:00:00", "b": 523.2}, {"a": "2024-11-28 09:05:00", "b": 520.8}, {"a": "2024-11-28 09:10:00", "b": 527.8}, {"a": "2024-11-28 09:15:00", "b": 522.4}, {"a": "2024-11-28 09:20:00", "b": 513.6}, {"a": "2024-11-28 09:25:00", "b": 520.6}, {"a": "2024-11-28 09:30:00", "b": 531.2}, {"a": "2024-11-28 09:35:00", "b": 509.8}, {"a": "2024-11-28 09:40:00", "b": 484.2}, {"a": "2024-11-28 09:45:00", "b": 478.25}, {"a": "2024-11-28 09:50:00", "b": 510.8}, {"a": "2024-11-28 09:55:00", "b": 489.4}, {"a": "2024-11-28 10:00:00", "b": 491.25}, {"a": "2024-11-28 10:05:00", "b": 494.8}, {"a": "2024-11-28 10:10:00", "b": 475.0}, {"a": "2024-11-28 10:15:00", "b": 482.6}, {"a": "2024-11-28 10:20:00", "b": 504.75}, {"a": "2024-11-28 10:25:00", "b": 495.6}, {"a": "2024-11-28 10:30:00", "b": 532.8}, {"a": "2024-11-28 10:35:00", "b": 492.2}, {"a": "2024-11-28 10:40:00", "b": 478.8}, {"a": "2024-11-28 10:45:00", "b": 479.8}, {"a": "2024-11-28 10:50:00", "b": 526.0}, {"a": "2024-11-28 10:55:00", "b": 474.75}, {"a": "2024-11-28 11:00:00", "b": 496.4}, {"a": "2024-11-28 11:05:00", "b": 488.5}, {"a": "2024-11-28 11:10:00", "b": 481.8}, {"a": "2024-11-28 11:15:00", "b": 517.2}, {"a": "2024-11-28 11:20:00", "b": 514.4}, {"a": "2024-11-28 11:25:00", "b": 463.8}, {"a": "2024-11-28 11:30:00", "b": 472.75}, {"a": "2024-11-28 11:35:00", "b": 474.8}, {"a": "2024-11-28 11:40:00", "b": 481.0}, {"a": "2024-11-28 11:45:00", "b": 467.5}, {"a": "2024-11-28 11:50:00", "b": 469.8}, {"a": "2024-11-28 11:55:00", "b": 539.0}, {"a": "2024-11-28 12:00:00", "b": 483.2}, {"a": "2024-11-28 12:05:00", "b": 483.4}, {"a": "2024-11-28 12:10:00", "b": 478.2}, {"a": "2024-11-28 12:15:00", "b": 509.4}, {"a": "2024-11-28 12:20:00", "b": 488.6}, {"a": "2024-11-28 12:25:00", "b": 449.75}, {"a": "2024-11-28 12:30:00", "b": 449.2}, {"a": "2024-11-28 12:35:00", "b": 534.6}, {"a": "2024-11-28 12:40:00", "b": 485.4}, {"a": "2024-11-28 12:45:00", "b": 464.6}, {"a": "2024-11-28 12:50:00", "b": 504.2}, {"a": "2024-11-28 12:55:00", "b": 507.6}, {"a": "2024-11-28 13:00:00", "b": 475.8}, {"a": "2024-11-28 13:05:00", "b": 493.4}, {"a": "2024-11-28 13:10:00", "b": 469.5}, {"a": "2024-11-28 13:15:00", "b": 467.4}, {"a": "2024-11-28 13:20:00", "b": 493.75}, {"a": "2024-11-28 13:25:00", "b": 502.6}, {"a": "2024-11-28 13:30:00", "b": 492.25}, {"a": "2024-11-28 13:35:00", "b": 503.6}, {"a": "2024-11-28 13:40:00", "b": 490.0}, {"a": "2024-11-28 13:45:00", "b": 467.5}, {"a": "2024-11-28 13:50:00", "b": 476.4}, {"a": "2024-11-28 13:55:00", "b": 491.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    