
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 07:10:00", "b": 520.2}, {"a": "2024-11-03 07:15:00", "b": 527.4}, {"a": "2024-11-03 07:20:00", "b": 523.25}, {"a": "2024-11-03 07:25:00", "b": 520.75}, {"a": "2024-11-03 07:30:00", "b": 514.3333333333334}, {"a": "2024-11-03 07:35:00", "b": 529.8}, {"a": "2024-11-03 07:40:00", "b": 522.5}, {"a": "2024-11-03 07:45:00", "b": 508.5}, {"a": "2024-11-03 07:50:00", "b": 506.5}, {"a": "2024-11-03 07:55:00", "b": 513.6}, {"a": "2024-11-03 08:00:00", "b": 525.2}, {"a": "2024-11-03 08:05:00", "b": 518.5}, {"a": "2024-11-03 08:10:00", "b": 496.2}, {"a": "2024-11-03 08:15:00", "b": 502.25}, {"a": "2024-11-03 08:20:00", "b": 509.0}, {"a": "2024-11-03 08:25:00", "b": 512.3333333333334}, {"a": "2024-11-03 08:30:00", "b": 505.75}, {"a": "2024-11-03 08:35:00", "b": 505.25}, {"a": "2024-11-03 08:40:00", "b": 498.8}, {"a": "2024-11-03 08:45:00", "b": 494.6}, {"a": "2024-11-03 08:50:00", "b": 505.2}, {"a": "2024-11-03 08:55:00", "b": 513.5}, {"a": "2024-11-03 09:00:00", "b": 519.0}, {"a": "2024-11-03 09:05:00", "b": 492.6}, {"a": "2024-11-03 09:10:00", "b": 483.0}, {"a": "2024-11-03 09:15:00", "b": 499.6}, {"a": "2024-11-03 09:20:00", "b": 507.2}, {"a": "2024-11-03 09:25:00", "b": 496.8}, {"a": "2024-11-03 09:30:00", "b": 488.8}, {"a": "2024-11-03 09:35:00", "b": 501.25}, {"a": "2024-11-03 09:40:00", "b": 499.3333333333333}, {"a": "2024-11-03 09:45:00", "b": 495.6}, {"a": "2024-11-03 09:50:00", "b": 505.75}, {"a": "2024-11-03 09:55:00", "b": 501.8}, {"a": "2024-11-03 10:00:00", "b": 490.0}, {"a": "2024-11-03 10:05:00", "b": 475.3333333333333}, {"a": "2024-11-03 10:10:00", "b": 483.0}, {"a": "2024-11-03 10:15:00", "b": 492.0}, {"a": "2024-11-03 10:20:00", "b": 493.5}, {"a": "2024-11-03 10:25:00", "b": 496.0}, {"a": "2024-11-03 10:30:00", "b": 499.75}, {"a": "2024-11-03 10:35:00", "b": 489.0}, {"a": "2024-11-03 10:40:00", "b": 490.6}, {"a": "2024-11-03 10:45:00", "b": 489.0}, {"a": "2024-11-03 10:50:00", "b": 485.6}, {"a": "2024-11-03 10:55:00", "b": 482.6}, {"a": "2024-11-03 11:00:00", "b": 483.2}, {"a": "2024-11-03 11:05:00", "b": 471.5}, {"a": "2024-11-03 11:10:00", "b": 486.0}, {"a": "2024-11-03 11:15:00", "b": 501.0}, {"a": "2024-11-03 11:20:00", "b": 492.6666666666667}, {"a": "2024-11-03 11:25:00", "b": 483.0}, {"a": "2024-11-03 11:30:00", "b": 485.5}, {"a": "2024-11-03 11:35:00", "b": 478.4}, {"a": "2024-11-03 11:40:00", "b": 477.5}, {"a": "2024-11-03 11:45:00", "b": 478.0}, {"a": "2024-11-03 11:50:00", "b": 481.25}, {"a": "2024-11-03 11:55:00", "b": 466.4}, {"a": "2024-11-03 12:00:00", "b": 473.8}, {"a": "2024-11-03 12:05:00", "b": 489.8}, {"a": "2024-11-03 12:10:00", "b": 481.2}, {"a": "2024-11-03 12:15:00", "b": 486.0}, {"a": "2024-11-03 12:20:00", "b": 482.75}, {"a": "2024-11-03 12:25:00", "b": 500.4}, {"a": "2024-11-03 12:30:00", "b": 506.8}, {"a": "2024-11-03 12:35:00", "b": 517.4}, {"a": "2024-11-03 12:40:00", "b": 635.4}, {"a": "2024-11-03 12:45:00", "b": 660.25}, {"a": "2024-11-03 12:50:00", "b": 648.0}, {"a": "2024-11-03 12:55:00", "b": 651.4}, {"a": "2024-11-03 13:00:00", "b": 643.6}, {"a": "2024-11-03 13:05:00", "b": 618.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    