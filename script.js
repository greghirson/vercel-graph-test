
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-06 05:00:00", "b": 484.0}, {"a": "2025-03-06 05:05:00", "b": 479.2}, {"a": "2025-03-06 05:10:00", "b": 478.3333333333333}, {"a": "2025-03-06 05:15:00", "b": 491.4}, {"a": "2025-03-06 05:20:00", "b": 493.8}, {"a": "2025-03-06 05:25:00", "b": 500.4}, {"a": "2025-03-06 05:30:00", "b": 505.0}, {"a": "2025-03-06 05:35:00", "b": 483.2}, {"a": "2025-03-06 05:40:00", "b": 477.2}, {"a": "2025-03-06 05:45:00", "b": 474.8}, {"a": "2025-03-06 05:50:00", "b": 470.8}, {"a": "2025-03-06 05:55:00", "b": 489.6}, {"a": "2025-03-06 06:00:00", "b": 488.4}, {"a": "2025-03-06 06:05:00", "b": 484.25}, {"a": "2025-03-06 06:10:00", "b": 490.0}, {"a": "2025-03-06 06:15:00", "b": 492.25}, {"a": "2025-03-06 06:20:00", "b": 484.8}, {"a": "2025-03-06 06:25:00", "b": 497.25}, {"a": "2025-03-06 06:30:00", "b": 501.6}, {"a": "2025-03-06 06:35:00", "b": 507.4}, {"a": "2025-03-06 06:40:00", "b": 505.0}, {"a": "2025-03-06 06:45:00", "b": 510.8}, {"a": "2025-03-06 06:50:00", "b": 493.0}, {"a": "2025-03-06 06:55:00", "b": 484.0}, {"a": "2025-03-06 07:00:00", "b": 491.25}, {"a": "2025-03-06 07:05:00", "b": 477.6}, {"a": "2025-03-06 07:10:00", "b": 479.0}, {"a": "2025-03-06 07:15:00", "b": 480.4}, {"a": "2025-03-06 07:20:00", "b": 495.75}, {"a": "2025-03-06 07:25:00", "b": 504.5}, {"a": "2025-03-06 07:30:00", "b": 508.8}, {"a": "2025-03-06 07:35:00", "b": 512.5}, {"a": "2025-03-06 07:40:00", "b": 520.0}, {"a": "2025-03-06 07:45:00", "b": 528.25}, {"a": "2025-03-06 07:50:00", "b": 535.2}, {"a": "2025-03-06 07:55:00", "b": 554.6}, {"a": "2025-03-06 08:00:00", "b": 567.6}, {"a": "2025-03-06 08:05:00", "b": 567.0}, {"a": "2025-03-06 08:10:00", "b": 565.0}, {"a": "2025-03-06 08:15:00", "b": 565.0}, {"a": "2025-03-06 08:20:00", "b": 566.2}, {"a": "2025-03-06 08:25:00", "b": 554.8}, {"a": "2025-03-06 08:30:00", "b": 545.8}, {"a": "2025-03-06 08:35:00", "b": 557.5}, {"a": "2025-03-06 08:40:00", "b": 547.75}, {"a": "2025-03-06 08:45:00", "b": 550.25}, {"a": "2025-03-06 08:50:00", "b": 537.0}, {"a": "2025-03-06 08:55:00", "b": 529.2}, {"a": "2025-03-06 09:00:00", "b": 508.2}, {"a": "2025-03-06 09:05:00", "b": 494.3333333333333}, {"a": "2025-03-06 09:10:00", "b": 497.5}, {"a": "2025-03-06 09:15:00", "b": 500.0}, {"a": "2025-03-06 09:20:00", "b": 494.5}, {"a": "2025-03-06 09:25:00", "b": 484.2}, {"a": "2025-03-06 09:30:00", "b": 477.3333333333333}, {"a": "2025-03-06 09:35:00", "b": 493.0}, {"a": "2025-03-06 09:40:00", "b": 488.6}, {"a": "2025-03-06 09:45:00", "b": 472.25}, {"a": "2025-03-06 09:50:00", "b": 461.4}, {"a": "2025-03-06 09:55:00", "b": 461.2}, {"a": "2025-03-06 10:00:00", "b": 453.0}, {"a": "2025-03-06 10:05:00", "b": 459.5}, {"a": "2025-03-06 10:10:00", "b": 467.8}, {"a": "2025-03-06 10:15:00", "b": 461.4}, {"a": "2025-03-06 10:20:00", "b": 453.0}, {"a": "2025-03-06 10:25:00", "b": 453.2}, {"a": "2025-03-06 10:30:00", "b": 451.6}, {"a": "2025-03-06 10:35:00", "b": 441.0}, {"a": "2025-03-06 10:40:00", "b": 444.75}, {"a": "2025-03-06 10:45:00", "b": 448.6}, {"a": "2025-03-06 10:50:00", "b": 444.75}, {"a": "2025-03-06 10:55:00", "b": 450.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    