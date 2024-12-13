
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-13 01:00:00", "b": 514.0}, {"a": "2024-12-13 01:05:00", "b": 515.0}, {"a": "2024-12-13 01:10:00", "b": 525.8}, {"a": "2024-12-13 01:15:00", "b": 514.75}, {"a": "2024-12-13 01:20:00", "b": 510.3333333333333}, {"a": "2024-12-13 01:25:00", "b": 504.6}, {"a": "2024-12-13 01:30:00", "b": 512.75}, {"a": "2024-12-13 01:35:00", "b": 514.75}, {"a": "2024-12-13 01:40:00", "b": 508.2}, {"a": "2024-12-13 01:45:00", "b": 504.6}, {"a": "2024-12-13 01:50:00", "b": 535.8}, {"a": "2024-12-13 01:55:00", "b": 557.6}, {"a": "2024-12-13 02:00:00", "b": 551.0}, {"a": "2024-12-13 02:05:00", "b": 511.4}, {"a": "2024-12-13 02:10:00", "b": 495.75}, {"a": "2024-12-13 02:15:00", "b": 489.5}, {"a": "2024-12-13 02:20:00", "b": 477.5}, {"a": "2024-12-13 02:25:00", "b": 478.75}, {"a": "2024-12-13 02:30:00", "b": 483.4}, {"a": "2024-12-13 02:35:00", "b": 478.2}, {"a": "2024-12-13 02:40:00", "b": 467.6}, {"a": "2024-12-13 02:45:00", "b": 478.5}, {"a": "2024-12-13 02:50:00", "b": 476.3333333333333}, {"a": "2024-12-13 02:55:00", "b": 478.3333333333333}, {"a": "2024-12-13 03:00:00", "b": 483.6}, {"a": "2024-12-13 03:05:00", "b": 483.5}, {"a": "2024-12-13 03:10:00", "b": 479.75}, {"a": "2024-12-13 03:15:00", "b": 479.8}, {"a": "2024-12-13 03:20:00", "b": 477.4}, {"a": "2024-12-13 03:25:00", "b": 456.5}, {"a": "2024-12-13 03:30:00", "b": 461.8}, {"a": "2024-12-13 03:35:00", "b": 467.0}, {"a": "2024-12-13 03:40:00", "b": 470.0}, {"a": "2024-12-13 03:45:00", "b": 470.5}, {"a": "2024-12-13 03:50:00", "b": 449.25}, {"a": "2024-12-13 03:55:00", "b": 501.8}, {"a": "2024-12-13 04:00:00", "b": 536.8}, {"a": "2024-12-13 04:05:00", "b": 514.2}, {"a": "2024-12-13 04:10:00", "b": 489.4}, {"a": "2024-12-13 04:15:00", "b": 483.75}, {"a": "2024-12-13 04:20:00", "b": 467.6}, {"a": "2024-12-13 04:25:00", "b": 457.75}, {"a": "2024-12-13 04:30:00", "b": 463.5}, {"a": "2024-12-13 04:35:00", "b": 469.0}, {"a": "2024-12-13 04:40:00", "b": 455.4}, {"a": "2024-12-13 04:45:00", "b": 455.8}, {"a": "2024-12-13 04:50:00", "b": 468.2}, {"a": "2024-12-13 04:55:00", "b": 458.75}, {"a": "2024-12-13 05:00:00", "b": 461.2}, {"a": "2024-12-13 05:05:00", "b": 453.0}, {"a": "2024-12-13 05:10:00", "b": 454.0}, {"a": "2024-12-13 05:15:00", "b": 457.2}, {"a": "2024-12-13 05:20:00", "b": 468.0}, {"a": "2024-12-13 05:25:00", "b": 469.75}, {"a": "2024-12-13 05:30:00", "b": 480.5}, {"a": "2024-12-13 05:35:00", "b": 494.0}, {"a": "2024-12-13 05:40:00", "b": 483.5}, {"a": "2024-12-13 05:45:00", "b": 463.8}, {"a": "2024-12-13 05:50:00", "b": 469.0}, {"a": "2024-12-13 05:55:00", "b": 469.75}, {"a": "2024-12-13 06:00:00", "b": 471.25}, {"a": "2024-12-13 06:05:00", "b": 472.2}, {"a": "2024-12-13 06:10:00", "b": 463.75}, {"a": "2024-12-13 06:15:00", "b": 456.2}, {"a": "2024-12-13 06:20:00", "b": 461.25}, {"a": "2024-12-13 06:25:00", "b": 468.0}, {"a": "2024-12-13 06:30:00", "b": 466.5}, {"a": "2024-12-13 06:35:00", "b": 469.5}, {"a": "2024-12-13 06:40:00", "b": 502.2}, {"a": "2024-12-13 06:45:00", "b": 537.8}, {"a": "2024-12-13 06:50:00", "b": 563.25}, {"a": "2024-12-13 06:55:00", "b": 570.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    