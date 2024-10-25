
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-24 20:30:00", "b": 461.6}, {"a": "2024-10-24 20:35:00", "b": 486.5}, {"a": "2024-10-24 20:40:00", "b": 471.2}, {"a": "2024-10-24 20:45:00", "b": 465.25}, {"a": "2024-10-24 20:50:00", "b": 493.2}, {"a": "2024-10-24 20:55:00", "b": 517.5}, {"a": "2024-10-24 21:00:00", "b": 490.6}, {"a": "2024-10-24 21:05:00", "b": 460.2}, {"a": "2024-10-24 21:10:00", "b": 450.0}, {"a": "2024-10-24 21:15:00", "b": 448.5}, {"a": "2024-10-24 21:20:00", "b": 444.3333333333333}, {"a": "2024-10-24 21:25:00", "b": 476.2}, {"a": "2024-10-24 21:30:00", "b": 492.0}, {"a": "2024-10-24 21:35:00", "b": 463.6}, {"a": "2024-10-24 21:40:00", "b": 458.8}, {"a": "2024-10-24 21:45:00", "b": 463.5}, {"a": "2024-10-24 21:50:00", "b": 453.4}, {"a": "2024-10-24 21:55:00", "b": 457.0}, {"a": "2024-10-24 22:00:00", "b": 461.6}, {"a": "2024-10-24 22:05:00", "b": 471.8}, {"a": "2024-10-24 22:10:00", "b": 483.5}, {"a": "2024-10-24 22:15:00", "b": 482.5}, {"a": "2024-10-24 22:20:00", "b": 476.4}, {"a": "2024-10-24 22:25:00", "b": 476.2}, {"a": "2024-10-24 22:30:00", "b": 498.8}, {"a": "2024-10-24 22:35:00", "b": 493.2}, {"a": "2024-10-24 22:40:00", "b": 492.25}, {"a": "2024-10-24 22:45:00", "b": 497.5}, {"a": "2024-10-24 22:50:00", "b": 487.0}, {"a": "2024-10-24 22:55:00", "b": 489.0}, {"a": "2024-10-24 23:00:00", "b": 493.25}, {"a": "2024-10-24 23:05:00", "b": 493.0}, {"a": "2024-10-24 23:10:00", "b": 518.75}, {"a": "2024-10-24 23:15:00", "b": 502.4}, {"a": "2024-10-24 23:20:00", "b": 495.2}, {"a": "2024-10-24 23:25:00", "b": 507.0}, {"a": "2024-10-24 23:30:00", "b": 500.5}, {"a": "2024-10-24 23:35:00", "b": 499.75}, {"a": "2024-10-24 23:40:00", "b": 510.5}, {"a": "2024-10-24 23:45:00", "b": 511.0}, {"a": "2024-10-24 23:50:00", "b": 503.0}, {"a": "2024-10-24 23:55:00", "b": 509.0}, {"a": "2024-10-25 00:00:00", "b": 504.8}, {"a": "2024-10-25 00:05:00", "b": 506.2}, {"a": "2024-10-25 00:10:00", "b": 503.25}, {"a": "2024-10-25 00:15:00", "b": 503.2}, {"a": "2024-10-25 00:20:00", "b": 514.0}, {"a": "2024-10-25 00:25:00", "b": 510.4}, {"a": "2024-10-25 00:30:00", "b": 508.8}, {"a": "2024-10-25 00:35:00", "b": 511.2}, {"a": "2024-10-25 00:40:00", "b": 508.8}, {"a": "2024-10-25 00:45:00", "b": 511.2}, {"a": "2024-10-25 00:50:00", "b": 516.0}, {"a": "2024-10-25 00:55:00", "b": 513.75}, {"a": "2024-10-25 01:00:00", "b": 516.6}, {"a": "2024-10-25 01:05:00", "b": 520.0}, {"a": "2024-10-25 01:10:00", "b": 520.6}, {"a": "2024-10-25 01:15:00", "b": 512.8}, {"a": "2024-10-25 01:20:00", "b": 509.4}, {"a": "2024-10-25 01:25:00", "b": 516.25}, {"a": "2024-10-25 01:30:00", "b": 522.0}, {"a": "2024-10-25 01:35:00", "b": 515.25}, {"a": "2024-10-25 01:40:00", "b": 521.6666666666666}, {"a": "2024-10-25 01:45:00", "b": 526.2}, {"a": "2024-10-25 01:50:00", "b": 520.0}, {"a": "2024-10-25 01:55:00", "b": 519.4}, {"a": "2024-10-25 02:00:00", "b": 518.5}, {"a": "2024-10-25 02:05:00", "b": 516.75}, {"a": "2024-10-25 02:10:00", "b": 525.8}, {"a": "2024-10-25 02:15:00", "b": 515.4}, {"a": "2024-10-25 02:20:00", "b": 505.25}, {"a": "2024-10-25 02:25:00", "b": 519.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    