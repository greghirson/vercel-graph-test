
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-30 05:00:00", "b": 485.8}, {"a": "2024-11-30 05:05:00", "b": 484.3333333333333}, {"a": "2024-11-30 05:10:00", "b": 491.2}, {"a": "2024-11-30 05:15:00", "b": 474.4}, {"a": "2024-11-30 05:20:00", "b": 472.8}, {"a": "2024-11-30 05:25:00", "b": 469.0}, {"a": "2024-11-30 05:30:00", "b": 463.6}, {"a": "2024-11-30 05:35:00", "b": 470.8}, {"a": "2024-11-30 05:40:00", "b": 461.2}, {"a": "2024-11-30 05:45:00", "b": 464.2}, {"a": "2024-11-30 05:50:00", "b": 469.4}, {"a": "2024-11-30 05:55:00", "b": 478.5}, {"a": "2024-11-30 06:00:00", "b": 468.5}, {"a": "2024-11-30 06:05:00", "b": 464.25}, {"a": "2024-11-30 06:10:00", "b": 464.8}, {"a": "2024-11-30 06:15:00", "b": 481.0}, {"a": "2024-11-30 06:20:00", "b": 479.6}, {"a": "2024-11-30 06:25:00", "b": 465.2}, {"a": "2024-11-30 06:30:00", "b": 477.2}, {"a": "2024-11-30 06:35:00", "b": 483.0}, {"a": "2024-11-30 06:40:00", "b": 477.0}, {"a": "2024-11-30 06:45:00", "b": 469.5}, {"a": "2024-11-30 06:50:00", "b": 481.2}, {"a": "2024-11-30 06:55:00", "b": 473.6}, {"a": "2024-11-30 07:00:00", "b": 474.0}, {"a": "2024-11-30 07:05:00", "b": 488.75}, {"a": "2024-11-30 07:10:00", "b": 482.5}, {"a": "2024-11-30 07:15:00", "b": 463.6}, {"a": "2024-11-30 07:20:00", "b": 475.0}, {"a": "2024-11-30 07:25:00", "b": 484.8}, {"a": "2024-11-30 07:30:00", "b": 480.25}, {"a": "2024-11-30 07:35:00", "b": 472.5}, {"a": "2024-11-30 07:40:00", "b": 476.6}, {"a": "2024-11-30 07:45:00", "b": 486.0}, {"a": "2024-11-30 07:50:00", "b": 490.6}, {"a": "2024-11-30 07:55:00", "b": 488.6}, {"a": "2024-11-30 08:00:00", "b": 483.5}, {"a": "2024-11-30 08:05:00", "b": 486.3333333333333}, {"a": "2024-11-30 08:10:00", "b": 491.0}, {"a": "2024-11-30 08:15:00", "b": 495.0}, {"a": "2024-11-30 08:20:00", "b": 503.2}, {"a": "2024-11-30 08:25:00", "b": 496.2}, {"a": "2024-11-30 08:30:00", "b": 490.0}, {"a": "2024-11-30 08:35:00", "b": 502.4}, {"a": "2024-11-30 08:40:00", "b": 493.6}, {"a": "2024-11-30 08:45:00", "b": 479.8}, {"a": "2024-11-30 08:50:00", "b": 484.2}, {"a": "2024-11-30 08:55:00", "b": 479.4}, {"a": "2024-11-30 09:00:00", "b": 478.4}, {"a": "2024-11-30 09:05:00", "b": 504.25}, {"a": "2024-11-30 09:10:00", "b": 496.2}, {"a": "2024-11-30 09:15:00", "b": 485.0}, {"a": "2024-11-30 09:20:00", "b": 488.25}, {"a": "2024-11-30 09:25:00", "b": 500.0}, {"a": "2024-11-30 09:30:00", "b": 503.4}, {"a": "2024-11-30 09:35:00", "b": 505.6}, {"a": "2024-11-30 09:40:00", "b": 499.0}, {"a": "2024-11-30 09:45:00", "b": 508.2}, {"a": "2024-11-30 09:50:00", "b": 526.0}, {"a": "2024-11-30 09:55:00", "b": 522.6}, {"a": "2024-11-30 10:00:00", "b": 501.75}, {"a": "2024-11-30 10:05:00", "b": 498.0}, {"a": "2024-11-30 10:10:00", "b": 505.3333333333333}, {"a": "2024-11-30 10:15:00", "b": 498.6}, {"a": "2024-11-30 10:20:00", "b": 485.6}, {"a": "2024-11-30 10:25:00", "b": 511.0}, {"a": "2024-11-30 10:30:00", "b": 506.4}, {"a": "2024-11-30 10:35:00", "b": 497.8}, {"a": "2024-11-30 10:40:00", "b": 506.8}, {"a": "2024-11-30 10:45:00", "b": 491.0}, {"a": "2024-11-30 10:50:00", "b": 483.25}, {"a": "2024-11-30 10:55:00", "b": 489.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    